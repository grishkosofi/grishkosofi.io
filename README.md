# Sofiia Grishko Portfolio

A modern personal developer portfolio for **Sofiia Grishko**, a Software Engineering student in Potsdam, Germany. The site presents skills, projects, education, current technical focus, and contact information for software engineering opportunities.

## Technology Stack

- React
- Vite
- JavaScript
- CSS
- Lucide React (icons)
- GitHub Actions (GitHub Pages deployment)

## Local Installation

Node.js requirement: `^20.19.0 || >=22.12.0`

```bash
npm install
```

## Run in Development

```bash
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

The repository includes a GitHub Actions workflow at:

`/.github/workflows/deploy.yml`

Also ensure GitHub Pages is enabled in repository settings and configured to deploy from **GitHub Actions**.

On every push to `main`, it:

1. Installs dependencies
2. Builds the Vite app
3. Uploads the `dist` artifact
4. Deploys to GitHub Pages

Target production URL:

`https://grishkosofi.github.io`

### Vite base path

The Vite `base` value is controlled by `VITE_BASE_PATH` (see `vite.config.js`).

- For a root domain deployment (user/organization site), use: `/`
- For a project-path deployment, use: `/<repository-name>/`

The GitHub Actions workflow currently sets `VITE_BASE_PATH=/` for deployment to `grishkosofi.github.io`.

## Content Configuration

Update portfolio content from centralized files:

- Personal/profile details: `src/config/personal.js`
- Skills: `src/data/skills.js`
- Projects: `src/data/projects.js`

TODO placeholders are intentionally included in config/data files where personal URLs or contact values were not provided.
