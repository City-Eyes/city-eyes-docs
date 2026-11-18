"""Checks repository entrypoints without claiming product or source validation."""
from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
required = ["README.md", "CONTRIBUTING.md", "AGENTS.md", "LICENSE"]
errors = []
for name in required:
    path = root / name
    if not path.is_file() or not path.read_text().strip():
        errors.append(f"Arquivo obrigatório ausente ou vazio: {name}")
for path in [root / name for name in required if name.endswith(".md")]:
    if path.is_file():
        text = path.read_text()
        if not re.search(r"^# .+", text, re.M):
            errors.append(f"Falta título: {path.name}")
        if text.count("```") % 2:
            errors.append(f"Bloco de código não fechado: {path.name}")
if not (root / ".github/pull_request_template.md").is_file():
    errors.append("Template de PR ausente.")
if (root / ".github/dependabot.yml").exists():
    errors.append("Dependabot não faz parte do fluxo aprovado.")
if errors:
    raise SystemExit("\n".join(errors))
print("Entradas documentais e arquivos de governança válidos.")
