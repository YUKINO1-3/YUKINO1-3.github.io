# Evidence navigation

Home presents the most recently published Work as Featured Work and the most
recently published Note. If either is absent, its section explains the absence.
The Academic Snapshot continues to include only verified public Academic Results.

Works and Notes derive Subject, Medium and Capability filter options from their
own published content. Filters combine with AND; Clear filters restores the full
list. Without JavaScript, all published entries and evidence links remain readable.
The Capabilities evidence map on Works links to published Works and Notes.

Recent Activity combines published Works, published Notes and explicitly recorded
important milestones, newest first. Equal dates sort by title, then content kind.
It does not import commits, informal updates or Academic Results automatically.

Record an important milestone in `src/content/milestones/*.md` with frontmatter:

```yaml
title: A concise factual milestone title
summary: Explain the completed milestone and why it matters.
date: 2026-09-12
lifecycle: draft
```

Use milestones for meaningful completed events such as presenting an investigation
or receiving an academic award, never routine progress or commit activity. Review
the factual claim before changing `lifecycle` to `published`; `draft` and `review`
entries stay off Home. This collection uses frontmatter only. No milestones are
invented or published by default. Tests use a separate fixture collection through
`MILESTONE_CONTENT_DIRECTORY`.
