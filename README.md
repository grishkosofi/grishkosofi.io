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

On every push to `master`, it:

1. Installs dependencies
2. Configures GitHub Pages metadata
3. Builds the Vite app with the project-site base path
4. Uploads the `dist` artifact
5. Deploys to GitHub Pages

Target production URL:

`https://grishkosofi.github.io/grishkosofi.io/`

### Vite base path

The Vite `base` value is controlled by `VITE_BASE_PATH` (see `vite.config.js`).

- For a root domain deployment (user/organization site), use: `/`
- For a project-path deployment, use: `/<repository-name>/`

This repository deploys as a project site, so the Vite base path should be `/grishkosofi.io/`.

## Content Configuration

Update portfolio content from centralized files:

- Personal/profile details: `src/config/personal.js`
- Skills: `src/data/skills.js`
- Projects: `src/data/projects.js`

Project entries should stay aligned with the current public repository state on `https://github.com/grishkosofi`.
