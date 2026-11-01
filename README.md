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

Pages:

- `/` — homepage with the list of rooms
- `/rooms/:slug` — a room and its exhibits, for example `/rooms/porcelain`

To check the code:

```bash
npm run lint
```

## Editing content

All rooms and exhibits are stored in two JSON files. You don't need to change
any code to edit them.

- `src/data/rooms.json` — thematic rooms
- `src/data/exhibits.json` — exhibits; `roomId` must match the `id` of a room

Every text has a Russian (`ru`) and a Chinese (`zh`) version. Example exhibit:

```json
{
  "id": "porcelain-vase",
  "slug": "porcelain-vase",
  "roomId": "porcelain",
  "title": { "ru": "Название", "zh": "名称" },
  "description": { "ru": "Описание", "zh": "介绍" },
  "image": "/images/exhibits/porcelain-vase.jpg",
  "audio": {
    "ru": "/audio/ru/porcelain-vase.mp3",
    "zh": "/audio/zh/porcelain-vase.mp3"
  },
  "sourceUrl": "https://link-to-the-museum-record"
}
```

- `id` and `slug` must be unique. Use lowercase Latin letters, digits and
  hyphens. The room `slug` is used in the page address: `/rooms/<slug>`.
- `image`, `sourceUrl` and the `audio` files are optional. Without an image, a
  placeholder is shown.
- Put images and audio files into the `public/` folder and write the path
  without `public`. For example, `public/images/exhibits/porcelain-vase.jpg`
  becomes `/images/exhibits/porcelain-vase.jpg`.
- The current exhibits are placeholders. Replace them with real exhibits and
  take every fact from the official museum record.

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
`/rooms/porcelain` work when opened directly or refreshed.
