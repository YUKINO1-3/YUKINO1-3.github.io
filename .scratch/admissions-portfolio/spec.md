Status: ready-for-agent

# Admissions Portfolio Website

## Problem Statement

The applicant needs an English-language Portfolio that strengthens a 2027 application for 2028 university entry, with mathematics as the primary academic axis and economics and computing as adjacent evidence. Examination results already appear in formal applications, so the website must add value by demonstrating how the applicant models problems, builds interactive experiments, explains ideas, validates conclusions, and reflects on limitations.

The applicant currently has a proposed content framework but no finished Works ready for publication. The first release must therefore provide a complete, credible publishing platform without presenting Planned Work Categories, empty score fields, generated prose, or fabricated examples as completed evidence. The platform must be inexpensive to maintain, deploy reliably to GitHub Pages, and support later updates through structured GitHub Issues and human-approved pull requests.

The applicant also wants automation that can classify submitted classroom notes, update Academic Results, and eventually experiment with AI-assisted expansion. This automation must preserve factual accuracy and applicant control. Generated Articles must not be presented as Notes or as evidence of independent academic understanding, and no automated change may publish without human review.

## Solution

Build a static, responsive Portfolio with a restrained “digital laboratory” visual identity supported by academic typography. The site will use Astro for layouts, routing, validated content collections, and static HTML; React for isolated interactive experiments; Vite as the build system; TypeScript in strict mode; and pnpm for package management. GitHub Actions will validate pull requests and deploy the production artifact from the protected default branch to `username.github.io`.

The public information architecture will contain Home, Works, Notes, and About. Home will communicate the applicant's quantitative profile, feature evidence-backed content, and show a compact Academic Snapshot. Works and Notes will be classified through controlled Subject, Medium, and Capability vocabularies. Empty classifications will not appear. Recent Activity will contain only published Works, Notes, and meaningful milestones.

Content will use structured Markdown with validated frontmatter. Academic Result updates and new Note submissions will use separate Issue Forms and separate workflows. Academic Result updates will be deterministic and will never use generative AI. Note classification may recommend labels only from the controlled vocabulary. Automation will create a pull request, never publish directly. AI support will be provider-independent, disabled when no credentials are configured, and limited to private review artifacts when it freely generates or substantially rewrites an article.

The technical preview may be deployed before content is ready but must not be promoted as an application Portfolio. The application-ready release requires at least one applicant-created flagship Case Study, four applicant-led Notes, verified Academic Results, real public identity information, and passing quality gates.

## User Stories

1. As an admissions reader, I want to understand the applicant's quantitative identity quickly, so that I can decide which evidence deserves closer attention.
2. As an admissions reader, I want the Portfolio to emphasize mathematical modelling and computational experimentation, so that the applicant's academic direction is coherent.
3. As an admissions reader, I want economics and computing to appear as meaningful applications of quantitative thinking, so that the Portfolio feels broad without becoming unfocused.
4. As an admissions reader, I want to see completed evidence instead of future intentions, so that I am not asked to treat plans as achievements.
5. As an admissions reader, I want every claimed Capability to link to a Work or Note, so that ability is demonstrated rather than asserted.
6. As an admissions reader, I want each Case Study to explain its problem, assumptions, process, difficult decisions, result, validation, and limitations, so that I can evaluate the applicant's thinking.
7. As an admissions reader, I want applicant contribution to be explicit, so that I can distinguish individual work from tools or collaborators.
8. As an admissions reader, I want content to remain readable without client-side JavaScript, so that the core evidence is durable and accessible.
9. As an admissions reader, I want stable public URLs, so that links saved from application materials continue to work.
10. As an admissions reader, I want an Academic Snapshot that contains only existing results, so that I do not encounter ambiguous empty scores.
11. As an admissions reader, I want predicted and achieved Academic Results clearly distinguished, so that I can interpret them correctly.
12. As an admissions reader, I want examination session, awarding body, and effective date attached to each Academic Result, so that the context is unambiguous.
13. As an admissions reader, I want Recent Activity to contain meaningful publications and milestones, so that it reflects progress rather than commit noise.
14. As an admissions reader, I want Works and Notes filterable by Subject, Medium, and Capability, so that I can explore relevant evidence efficiently.
15. As an admissions reader, I want empty classifications hidden, so that navigation never leads to placeholder content.
16. As an admissions reader, I want concise, legible academic typography, so that long explanations are comfortable to read.
17. As an admissions reader, I want one purposeful interactive visual on the homepage, so that the site expresses experimentation without distracting from evidence.
18. As an admissions reader using a phone, I want all pages and experiments usable at narrow widths, so that I can review the Portfolio on any device.
19. As an admissions reader who prefers reduced motion, I want animations reduced or disabled, so that the experience respects my system preference.
20. As a keyboard or screen-reader user, I want semantic structure and accessible controls, so that the Portfolio is operable without a pointer or visual chart alone.
21. As an applicant, I want Home, Works, Notes, and About to form a small stable navigation model, so that the site remains maintainable as content grows.
22. As an applicant, I want CLI, web, AI/agent, Blender, and Godot represented as Medium values rather than permanent top-level sections, so that absent media do not create empty pages.
23. As an applicant, I want Mathematics, Economics, Physics, and Computer Science available as controlled Subjects, so that classroom material can be organized consistently.
24. As an applicant, I want modelling, visualization, algorithms, research, and technical writing represented as controlled Capabilities, so that Works and Notes can provide evidence for them.
25. As an applicant, I want the system to reject unknown labels, so that automation cannot silently fragment the taxonomy.
26. As an applicant, I want uncertain classification marked for review, so that the system does not pretend confidence it lacks.
27. As an applicant, I want to submit an existing classroom Note through a structured Issue Form, so that publication begins from my own material.
28. As an applicant, I want a Note submission to include my question, explanation, example or derivation, uncertainties, requested assistance, and source constraints, so that automation amplifies rather than replaces my thinking.
29. As an applicant, I want Note automation to create a Draft Note in a pull request, so that I can inspect all changes before publication.
30. As an applicant, I want the pull request to summarize corrections and added claims with their evidence, so that review is practical.
31. As an applicant, I want mathematical notation, code samples, links, and citations checked where possible, so that polished prose does not conceal errors.
32. As an applicant, I want a failed Note workflow to preserve the request and report the failure, so that nothing incomplete is silently published.
33. As an applicant, I want to submit an Academic Result through a dedicated structured form, so that score updates are consistent and auditable.
34. As an applicant, I want Academic Result automation to map validated fields directly into structured data without generative AI, so that factual updates remain deterministic.
35. As an applicant, I want only owner-authored or owner-approved requests to access privileged automation, so that outsiders cannot consume credentials or change my Portfolio.
36. As an applicant, I want every automated content or result change to create a pull request, so that I remain the publication authority.
37. As an applicant, I want only merged changes on the protected default branch to deploy, so that previews cannot reach production accidentally.
38. As an applicant, I want draft content excluded from production output and public metadata, so that unfinished work is not discoverable.
39. As an applicant, I want review content available only through controlled build artifacts, so that private previews are not mistaken for published pages.
40. As an applicant, I want Generated Articles excluded from Featured Work, capability evidence, Notes, and the application narrative, so that they do not misrepresent authorship.
41. As an applicant, I want the automation workflow itself documented as a Work, so that its schemas, controls, validation, failures, costs, and trade-offs demonstrate engineering judgment.
42. As an applicant, I want AI integration to use a provider-independent boundary, so that I can choose a service after learning its cost and limitations.
43. As an applicant, I want the site and deterministic workflows to function when no AI provider is configured, so that an optional experiment cannot block the Portfolio.
44. As an applicant, I want explicit per-run and monthly AI limits when a provider is enabled, so that automation cannot create unexpected costs.
45. As an applicant, I want API credentials confined to protected automation secrets, so that they never appear in source, Issues, browser code, or logs.
46. As an applicant, I want my first flagship Work to investigate how outliers, sample size, and confounding variables influence correlation and regression, so that mathematics, economics, and computation reinforce one another.
47. As an applicant, I want the flagship experiment to expose parameters and sample size, so that readers can test the model rather than watch a fixed animation.
48. As an applicant, I want random simulations to support reproducible seeds, so that results can be checked.
49. As an applicant, I want the flagship Case Study to explain statistical assumptions and validation, so that the project demonstrates research discipline.
50. As an applicant, I want the flagship Case Study to show failure cases and model limitations, so that it does not overclaim conclusions.
51. As an applicant, I want the experiment's conclusions understandable without animation, so that presentation does not replace explanation.
52. As an applicant, I want an initial Mathematics Note about the algebraic definitions, geometric meaning, and applications of dot and cross products, so that vector reasoning is demonstrated precisely.
53. As an applicant, I want an initial Economics Note comparing microeconomic and macroeconomic questions through a shared price-rise scenario, so that the distinction is applied rather than memorized.
54. As an applicant, I want an initial Physics Note that uses a real system to explain Newton's three laws, reference frames, and applicability limits, so that mechanics is connected to modelling assumptions.
55. As an applicant, I want an initial Computer Science Note explaining bubble sort through invariants, correctness, optimization, and visualization, so that a basic algorithm is treated rigorously.
56. As an applicant, I want those four Notes to begin from my complete classroom notes, so that they remain applicant-led evidence.
57. As an applicant, I want the technical preview to use explicit identity placeholders and no fabricated biography, so that missing facts are not disguised.
58. As an applicant, I want the technical preview excluded from search indexing, so that an incomplete Portfolio is not presented publicly as final.
59. As an applicant, I want the application-ready release blocked until real name, public email, GitHub identity, required evidence, and quality gates are present, so that the submitted link is credible.
60. As an applicant, I want code under the MIT License while written content and original visuals retain their rights, so that reuse expectations are clear.
61. As an applicant, I want each published page to include accurate title, summary, canonical URL, social metadata, and dates, so that links are understandable when shared.
62. As an applicant, I want a sitemap, RSS feed, and useful 404 page, so that published content is discoverable and broken routes are handled gracefully.
63. As an applicant, I want no account system, comments, likes, database, or analytics in the first release, so that maintenance and privacy remain simple.
64. As an applicant, I want dependencies updated through reviewable automated pull requests, so that the technology remains maintained without silent upgrades.
65. As an applicant, I want every pull request to run quality checks, so that broken content and code are caught before merge.
66. As an applicant, I want the production site deployed as a GitHub Pages artifact, so that generated files do not need to be committed to a deployment branch.
67. As an applicant, I want the deployment workflow to use minimal permissions and a protected environment, so that publishing authority is constrained.
68. As a maintainer, I want third-party Actions pinned to immutable commits, so that supply-chain changes cannot silently alter privileged workflows.
69. As a maintainer, I want concurrent automation for the same request deduplicated or cancelled, so that duplicate pull requests are not created.
70. As a maintainer, I want structured content schemas to fail the build with actionable errors, so that invalid frontmatter never reaches production.
71. As a maintainer, I want interactive components selected from an explicit allowlist, so that generated content cannot inject arbitrary React or MDX code.
72. As a maintainer, I want performance and bundle budgets, so that interactive experiments do not degrade the reading experience.
73. As a maintainer, I want a repeatable local development and validation command set, so that CI behavior can be reproduced before pushing.
74. As an admissions reader, I want the site to avoid visitor tracking, so that reviewing the Portfolio does not require accepting analytics cookies.
75. As an admissions reader, I want the Portfolio's English version to be authoritative, so that terminology and links remain consistent.

## Implementation Decisions

- Treat the repository as a greenfield, single-context Portfolio project. Preserve the existing domain glossary and ADRs as governing documentation.
- Use Astro for layouts, static routes, and validated build-time content collections. Use React only for stateful interactive islands. Use Vite underneath Astro and TypeScript in strict mode across the project.
- Use pnpm with a committed lockfile. CI must use frozen dependency installation.
- Use a restrained digital-laboratory visual direction with academic typography. The homepage gets one primary interactive visual; content pages prioritize legibility.
- Keep the public navigation to Home, Works, Notes, and About.
- Home contains the core quantitative claim, Featured Work, the latest published Note, and a compact Academic Snapshot.
- Works and Notes are content collections with stable slugs. Titles may change without changing public URLs.
- Generate classification navigation from published content. Never render empty Planned Work Categories or “coming soon” evidence cards.
- Use three independent controlled vocabularies: Subject, Medium, and Capability. Each item has one primary Subject and may have multiple controlled Medium and Capability values.
- Treat Capability as evidence-backed. Do not render proficiency percentages, progress bars, software-logo walls, or unsupported self-ratings.
- A Case Study must include the problem, applicant contribution, model or design assumptions, implementation process, difficult decisions, outcome, validation, limitations, and links to a live demonstration and readable source where applicable.
- Store prose as Markdown with schema-validated YAML frontmatter. Do not allow arbitrary MDX or generated executable code. Interactive embeds resolve through an allowlist of maintained components.
- Use KaTeX-compatible mathematical notation. Code, formulas, links, and references receive automated validation where suitable.
- Model lifecycle as draft, review, and published. Drafts are excluded from production builds; review content exists only in controlled pull-request artifacts; published content is included after merge.
- Separate Note, Work, Academic Result, and identity data into independently validated models. Academic Results require qualification, subject when applicable, result, predicted-or-achieved status, awarding body, examination session, evidence-checked state, and effective date.
- Do not render missing Academic Results. Courses currently being studied may be described separately but are not Academic Results.
- Keep the Academic Snapshot visually secondary, at roughly one fifth of the homepage's evidence weight.
- Derive Recent Activity from published Works, Notes, and meaningful milestones. Do not display raw commits or social-style updates.
- Provide separate structured Issue Forms and workflows for Academic Result updates and new Note submissions.
- Academic Result automation is deterministic: authorize actor, validate the form, produce a structured data change, run checks, and create a pull request. Generative AI is never used for score handling.
- Note automation validates a Source Brief, recommends only controlled classification values, marks uncertain classification for review, creates a Draft Note change, and opens a pull request.
- Free AI generation or substantial rewriting produces a Generated Article, not a Note. Generated Articles remain private review artifacts and are excluded from public admissions evidence.
- The AI integration uses a provider-neutral interface, is disabled without credentials, enforces usage limits when enabled, and cannot block deterministic content or deployment workflows.
- Automation may begin with the first submitted Note, but no automated output publishes directly. Human review and merge are mandatory.
- Restrict privileged Issue automation to the repository owner or explicitly approved actors. Treat Issue text and model output as untrusted data.
- Use minimal workflow permissions, protected environments, immutable Action references, secret redaction, per-request concurrency, and production deployment only from the protected default branch.
- Deploy a static artifact to the root user site at `username.github.io`. The final repository name and deployment target remain pending the applicant's GitHub username.
- Use Tailwind CSS with a small token layer based on CSS custom properties. Avoid heavy component systems unless a demonstrated need appears.
- Prefer accessible SVG or Canvas for the statistical experiment. Introduce a charting library only if native rendering becomes unjustifiably complex.
- Use React Testing Library and Vitest for isolated interactive behavior, Playwright for browser-level acceptance checks, and automated accessibility checks. Use ESLint and Prettier for code consistency.
- Add metadata for titles, descriptions, canonical URLs, Open Graph, sitemap, RSS, publication dates, update dates, and a static 404 experience.
- Honor `prefers-reduced-motion`, avoid scroll hijacking and custom cursors, make all conclusions readable without animation, and defer expensive interactive code.
- Target WCAG 2.2 AA, recent two major versions of Chrome, Edge, Firefox, and Safari, and usable layouts beginning at 320 CSS pixels.
- Set performance and bundle budgets. Target at least 90 in core Lighthouse categories without treating the score as a substitute for user-visible quality.
- Use MIT for source code. Retain rights for applicant-authored prose and original visuals unless a separate content license is chosen later.
- Do not include analytics, cookies, authentication, comments, likes, a database, a CMS, or site search in the initial release.
- Use Dependabot for reviewable dependency updates.
- Keep the technical preview explicitly incomplete, populated only with non-production fixtures, and excluded from indexing. Do not invent applicant identity, Works, Notes, or Academic Results.
- Require one applicant-created flagship Case Study, four applicant-led Notes, verified Academic Results, real name, public contact email, GitHub identity, and passing quality gates before calling the site application-ready.
- The flagship concept is an interactive correlation and regression experiment showing how outliers, sample size, and confounding variables change interpretation. It must support reproducible random data, parameter controls, assumptions, validation, and failure analysis.
- Initial Note subjects are dot and cross products; microeconomic versus macroeconomic questions through a price-rise scenario; Newton's laws in a real model with reference-frame and boundary discussion; and bubble sort correctness, invariants, optimization, and visualization.
- Identity values, GitHub username, final public email, avatar choice, AI provider, and AI budget remain configuration inputs to be supplied later; the implementation must not invent them.

## Testing Decisions

- Prefer the highest useful seam: given valid published content and public configuration, a production build produces a complete static Portfolio whose pages, navigation, metadata, classifications, and exclusions are observable in a browser. Tests assert visible behavior and generated outputs rather than Astro, React, or CSS implementation details.
- Add a complementary negative build suite: invalid frontmatter, unknown controlled labels, missing required Academic Result fields, prohibited executable embeds, and malformed references must fail with actionable diagnostics.
- Test lifecycle behavior at the build seam: draft and review entries never appear in production pages, navigation, sitemap, RSS, or search metadata; published entries do.
- Test empty-state behavior at the rendered-site seam: classifications without published content do not appear, absent Academic Results leave no empty fields, and the technical preview never fabricates evidence.
- Test the Academic Result workflow at its external boundary using representative authorized and unauthorized Issue payloads. Assert deterministic pull-request changes, schema rejection, idempotency, and absence of AI calls.
- Test the Note workflow at its external boundary using complete and incomplete Source Briefs. Assert controlled classification, uncertainty handling, pull-request-only output, and no direct publication.
- Test AI provider isolation through its contract: missing configuration fails only the optional AI task, usage limits stop calls, secrets are not logged, and Generated Articles cannot enter public collections.
- Test the statistical React island through user-observable controls and chart descriptions: changing sample size, outliers, confounders, and random seed updates results consistently; keyboard operation and reduced-motion behavior remain usable.
- Use Playwright smoke coverage for Home, Works, Notes, About, a Case Study, a Note, and 404. Verify direct navigation and refresh on stable GitHub Pages routes.
- Include automated WCAG-oriented checks and manual acceptance for keyboard focus, readable chart alternatives, contrast, zoom, and screen-reader naming. Automated tooling alone does not establish WCAG conformance.
- Verify responsive behavior at 320px and representative phone, tablet, laptop, and wide layouts without screenshot tests for incidental pixel details.
- Enforce type checking, linting, formatting verification, unit tests, content schema validation, link checking, production build, browser smoke tests, and dependency scanning on pull requests.
- Verify production deployment behavior from a built artifact in CI; pull requests must never deploy to the production environment.
- Verify metadata externally: unique titles and summaries, canonical URLs, Open Graph values, sitemap, RSS, dates, alternative text, and exclusion of drafts.
- Enforce defined bundle and performance budgets in CI while keeping thresholds stable enough to avoid flaky tests.
- There is no existing application test prior art because the repository is greenfield. The existing ADRs supply architectural constraints; the initial test harness becomes the prior art for subsequent features.

## Out of Scope

- Fabricating applicant identity, biography, Works, Notes, Academic Results, awards, or project outcomes.
- Publishing empty Planned Work Categories or placeholder score cells as application content.
- Treating Generated Articles as Notes or independent applicant evidence.
- Publicly publishing freely generated or substantially rewritten AI prose without disclosure as part of the Portfolio.
- Selecting or purchasing an AI provider before budget and credentials are supplied.
- Building the final flagship research content on behalf of the applicant; the platform and technical experiment scaffold are included, but applicant claims and reflection must come from the applicant.
- Writing the four applicant-led Notes from scratch; content automation begins from supplied classroom notes and Source Briefs.
- Accounts, authentication, visitor comments, likes, analytics, cookies, databases, CMS integration, and notifications beyond workflow feedback.
- Full-text site search before the content library reaches a size that justifies it.
- A bilingual public site in the initial release; English is authoritative.
- Custom-domain deployment in the initial release.
- Native mobile applications, server-side APIs, or runtime server infrastructure.
- Heavy 3D homepage scenes, scroll hijacking, custom cursors, or animation that is required to understand content.
- Publishing the technical preview as an application-ready Portfolio before the release gate is satisfied.
- Creating the GitHub user-site repository or final remote deployment before the applicant supplies the GitHub username and authenticates the GitHub CLI.

## Further Notes

- The target application cycle is 2027 for 2028 entry. Exact university programmes remain intentionally unspecified; the Portfolio should show general quantitative achievement rather than per-programme variants.
- Mathematics is the primary narrative. Economics is treated as a quantitative application and computing as a means of modelling, experimentation, and communication.
- The preferred core claim is that the applicant uses mathematical models and computational experiments to explore real and abstract problems, demonstrated through software, interactive explanations, and rigorous reflection.
- Admissions readers cannot be assumed to open external links. The Portfolio should first help the applicant create and retain authentic evidence that can also support application essays and interviews.
- CMU publicly cautions that AI should remain supplementary and not replace an applicant's voice. Imperial similarly emphasizes genuine personal thinking. This reinforces the ADR boundary between Notes and Generated Articles.
- Real name, GitHub username, public contact email, avatar choice, and a final one-sentence biography are required before public launch. Until then, use explicit development placeholders and `noindex` behavior.
- Suggested implementation order: project scaffold and schemas; visual system and static pages; statistical interaction scaffold; Issue Forms and deterministic classification; CI/CD; applicant content integration; optional AI provider integration last.
- The local issue tracker records this specification as ready for an implementation agent. Subsequent ticket decomposition should preserve the release gate and ADR constraints rather than collapsing the work into a single oversized ticket.
