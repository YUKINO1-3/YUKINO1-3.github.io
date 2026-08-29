# Pre-render content and isolate React interactions

Portfolio pages are generated as static HTML, while React is reserved for interactive experiments and other components that require client-side state. A pure single-page application would simplify one runtime model, but static output better preserves admissions-facing content when JavaScript is unavailable and improves initial rendering, link previews, and deployment reliability on GitHub Pages.
