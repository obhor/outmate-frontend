# OutMate frontend

A polished, responsive public-facing OutMate site with a shared design system and six product capability pages.

## Included routes

- `/` — homepage
- `/product/prospecting` — Prospecting
- `/product/research` — Account Research
- `/product/signals` — Buying Signals
- `/product/website-visitors` — Website Visitors
- `/product/intelligence` — Social & Web Intelligence
- `/product/agents` — GTM Agents
- `/features` — platform overview
- `/pricing` — pricing and access information

The existing Vercel rewrite is retained so direct requests to product routes resolve to `index.html`.

## Run locally

This is a static site and does not require a package installation or build step.

```bash
python3 preview_server.py
```

Then open `http://127.0.0.1:8000`. The included preview server supports direct access and refreshes on `/product/*` routes as well as the homepage. Alternatively, run `npm start` on a machine with Python 3 installed.

## Deploy

Deploy the project folder to Vercel as a static site. Keep the `assets/` directory alongside `index.html`; it contains fonts and the existing compiled application bundle used to preserve the previous account/workspace routes.

## Implementation notes

- `app.js` is the route/controller entry point and owns navigation interactions, scroll reveals, preview notices, and the legacy-route handoff.
- `src/catalog.js` contains the six capability definitions, descriptions, SVG icon paths, and reusable product cards.
- `src/views.js` contains shared navigation/footer components, homepage sections, and the product/platform/pricing page templates.
- `styles.css` holds the shared responsive visual system, product preview styles, reduced-motion support, and interaction states.
- Existing logo, visual assets, compiled chunks, font files, and the Vercel configuration are preserved from the uploaded archive.
- The `/login`, `/signup`, `/forgot-password`, `/reset-password`, `/verify-email`, and `/app` paths hand off to the original compiled application bundle, because the archive did not include its original React source.
- Product previews use clearly labelled sample/illustrative data. They are design prototypes, not connected live signal feeds or a replacement for backend/API integration. Confirm feature availability and product claims before using the copy externally.
- No subscription prices were invented; the Pricing page explicitly directs users to confirm current terms.

## Scope boundary

The uploaded ZIP contained a built deployment (HTML, compiled JavaScript/CSS, assets, and a Vercel rewrite), not the editable original React source or package manifest. This update adds maintainable source for the public homepage and product pages while preserving the original compiled bundle for the routes called out above. A future refactor can migrate those remaining routes into the source project when the original app repository becomes available.
