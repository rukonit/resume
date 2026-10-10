# Rukon Khan Portfolio

A responsive, single-page React portfolio built from Rukon Khan's resume.

## Run locally

```sh
npm install
npm run dev
```

To make a production build:

```sh
npm run build
```

The resume PDF is available at `public/resume.pdf` and is linked from the hero section.

## GitHub Pages deployment

The GitHub Actions workflow in `.github/workflows/ci-cd.yml` builds on pushes and pull requests. It deploys automatically when a push or manual run targets the repository's default branch. GitHub Pages is configured to use Actions. The workflow publishes the built site to Pages when changes reach the default branch.
