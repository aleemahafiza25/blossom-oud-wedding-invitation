# Blossom & Oud recreation starter

This is a clean Vite + React workspace. The supplied view-source is preserved at `public/blossom-original.html` so you can inspect the original page before converting it into React components.

## Requirements
- Install Node.js LTS from https://nodejs.org/
- Open this folder in VS Code

## Run locally
Open the VS Code terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Click **Open original source preview** to compare the supplied HTML.

## Important notes
- The source file was copied as supplied; it has not yet been rewritten or cleaned up.
- It references external Tilda CSS/JS and hosted images/audio/video. Some original website routes or relative files may not work locally. That is useful to identify before recreating the experience in React.
- Do not deploy the source page as your finished template yet. The next stage is to extract its artwork, styles, section order and interactions, then implement responsive React components and synchronized animations.
