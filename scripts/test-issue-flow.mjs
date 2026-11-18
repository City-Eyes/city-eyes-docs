import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workflow = await readFile(new URL("../.github/workflows/issue-flow.yml", import.meta.url), "utf8");
const job = workflow.split("  require-pr-to-close:\n")[1]?.split("\n  in-progress-on-branch:")[0];
assert.ok(job, "The close policy must exist in the workflow");
const source = job.split("          script: |\n")[1]?.trimEnd();
assert.ok(source, "The close policy script must exist");
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
const runPolicy = new AsyncFunction("github", "context", source.split("\n").map(line => line.replace(/^            /, "")).join("\n"));
const context = { repo: { owner: "test-owner", repo: "test-repo" }, issue: { number: 1 } };

function mockGitHub(nodes, { fail = false } = {}) {
  const calls = [];
  return {
    calls,
    graphql: async query => {
      assert.match(query, /closedByPullRequestsReferences/);
      assert.doesNotMatch(query, /ClosedEvent/);
      if (fail) throw new Error("API unavailable");
      return { repository: { issue: nodes === undefined ? null : { closedByPullRequestsReferences: { nodes } } } };
    },
    rest: { issues: {
      update: async payload => calls.push({ operation: "update", ...payload }),
      createComment: async payload => calls.push({ operation: "comment", ...payload }),
    } },
  };
}

test("accepts a merged closing PR even when the closer is a merge commit", async () => {
  const github = mockGitHub([{ merged: true }]);
  await runPolicy(github, context);
  assert.deepEqual(github.calls, []);
});

test("accepts a merged closing PR among other references", async () => {
  const github = mockGitHub([null, { merged: false }, { merged: true }]);
  await runPolicy(github, context);
  assert.deepEqual(github.calls, []);
});

for (const [name, nodes] of [["no closing PR", []], ["an unmerged closing PR", [{ merged: false }]]]) {
  test(`reopens a completed issue with ${name}`, async () => {
    const github = mockGitHub(nodes);
    await runPolicy(github, context);
    assert.equal(github.calls.length, 2);
    assert.equal(github.calls[0].operation, "update");
    assert.equal(github.calls[0].state, "open");
    assert.equal(github.calls[0].issue_number, 1);
    assert.equal(github.calls[1].operation, "comment");
  });
}

test("does not mutate an issue when the API fails", async () => {
  const github = mockGitHub([], { fail: true });
  await assert.rejects(runPolicy(github, context), /API unavailable/);
  assert.deepEqual(github.calls, []);
});

test("does not mutate an issue when the API response is incomplete", async () => {
  const github = mockGitHub(undefined);
  await assert.rejects(runPolicy(github, context), /nenhuma issue foi alterada/);
  assert.deepEqual(github.calls, []);
});
