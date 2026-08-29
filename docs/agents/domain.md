# Domain Docs

## Before exploring

- Read root `CONTEXT.md`.
- Read ADRs in `docs/adr/` that affect the work.
- If a future `CONTEXT-MAP.md` exists, follow it to relevant contexts.
- If a document is absent, proceed silently.

## Layout

This repository currently uses a single context:

- `CONTEXT.md`: canonical domain glossary
- `docs/adr/`: architectural decisions

## Vocabulary

Use canonical terms from `CONTEXT.md` in issues, specifications, tests, and implementation discussions. Avoid synonyms explicitly listed under `_Avoid_`.

If a necessary concept is missing, record the gap for domain modeling rather than silently inventing competing language.

## ADR conflicts

Surface any conflict with an existing ADR explicitly instead of silently overriding it.
