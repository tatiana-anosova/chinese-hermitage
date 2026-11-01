# chinese-hermitage

An interactive bilingual virtual museum of Chinese art from the Hermitage collection.

This is an independent educational school project. It is not the official
website of the State Hermitage Museum. See [AGENTS.md](./AGENTS.md) for the
project requirements.

## Tech stack

React, Vite, TypeScript, React Router, and plain CSS. The site is fully static
and is hosted on Vercel.

## Local setup

Requirements: [Node.js](https://nodejs.org/) 22.22 or newer (includes npm).

```bash
git clone https://github.com/tatiana-anosova/chinese-hermitage.git
cd chinese-hermitage
npm install
```

## Development

```bash
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173).

Current pages:

- `/` — welcome page
- `/rooms/demo` — temporary demo room

To check the code:

```bash
npm run lint
```

## Build

```bash
npm run build
```

The production files are written to `dist/`. To preview the build locally:

```bash
npm run preview
```

## Deployment to Vercel

1. Push the repository to GitHub.
2. In [Vercel](https://vercel.com/new), import the `chinese-hermitage` repository.
3. Vercel detects Vite automatically. Keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

Every push to the main branch deploys to production, and every pull request
gets a preview deployment.

`vercel.json` rewrites all paths to `index.html`, so pages such as
`/rooms/demo` work when opened directly or refreshed.
