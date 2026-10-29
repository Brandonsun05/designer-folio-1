# Brandon Sun Digital Media Folio

React + Vite portfolio site for a digital media designer. The site includes:

- Full-screen video hero with navigation and contact CTA
- Filterable work section with large visual cards
- Strengths section with capability cards
- Full-screen contact ending with email, phone, LinkedIn, and Instagram links

## Run Locally

Install dependencies, then start Vite:

```bash
npm install
npm run dev
```

## Replace Work Images

The current visual cards use placeholder SVG artwork in `public/works/`.
Replace these files with final project images using the same names, or update the `works` array in `src/main.jsx`.

## Update Links

Contact links live in `src/main.jsx`. Replace the LinkedIn URL with the final profile URL when ready.

The hero uses a free abstract MP4 from Pixabay with `public/hero-poster.svg` as the fallback poster.
