# Issue tracker: GitHub

Issues and specs for this repo live as GitHub Issues. Use the `gh` CLI for all operations.

## Repository

`YUKINO1-3/YUKINO1-3.github.io`

Infer the repository from the Git remote when operating inside this clone.

## Conventions

- Create issues with `gh issue create`.
- Read an issue and its comments with `gh issue view <number> --comments`.
- List issues using structured JSON output and filter by state or label.
- Add comments with `gh issue comment`.
- Apply or remove labels with `gh issue edit`.
- Close an issue with `gh issue close`.
- PRs are not treated as a triage request surface.

## When a skill says "publish to the issue tracker"

Create a GitHub Issue in this repository.

## When a skill says "fetch the relevant ticket"

Read the GitHub Issue body, labels, and comments.

## Blocking relationships

Use GitHub native issue dependencies where available. The blocking edge must reference the blocker's numeric database ID rather than its displayed issue number.

If native dependencies are unavailable, include `Blocked by: #<number>` in the child Issue body.

An Issue is unblocked only when all blocking Issues are closed.

## Wayfinding operations

- A map is one Issue labeled `wayfinder:map`.
- Child tickets are GitHub sub-issues where supported.
- Child type uses `wayfinder:research`, `wayfinder:prototype`, `wayfinder:grilling`, or `wayfinder:task`.
- Claim an Issue by assigning it to the active account before beginning work.
- Resolve by posting the answer, closing the Issue, and updating the map's decisions.
