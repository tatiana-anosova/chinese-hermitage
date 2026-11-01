# AGENTS.md

Long-term requirements for the **Chinese Hermitage virtual museum** project.
Read this before making changes.

## What this project is

A small educational website made for a 10th-grade school project: a bilingual
virtual exhibition of Chinese art and artifacts from the State Hermitage Museum
collection. It is an independent student project, **not** the official
Hermitage website.

## Requirements

- **Small static React website.** React + Vite + TypeScript, React Router
  (`BrowserRouter`), npm, plain CSS or CSS Modules. Hosted on Vercel as static
  files.
- **Two languages.** All visitor-facing content is in Russian and Simplified
  Chinese.
- **Thematic museum rooms.** Exhibits are grouped into themed rooms, each with
  its own page.
- **Exhibits.** Each exhibit has a description and **two separate MP3 audio
  guides**: one in Russian and one in Simplified Chinese.
- **Local content only.** Exhibit data lives in local JSON files; images and
  audio files are stored in the repository.
- **Client-side search.** Exhibit search runs in the browser over the local
  JSON data.
- **No backend or database.** No server code, APIs, authentication, or CMS.
- **Easy for a student to edit.** Content must be editable without
  programming knowledge: clear JSON structure, simple file names, and short
  instructions.
- **Never invent real museum metadata.** Do not make up inventory numbers,
  dates, dynasties, provenance, authors, materials, or other facts, and never
  present placeholder content as authentic exhibits. Placeholders must be
  clearly marked as placeholders.
- **No external fonts or CDN assets.** Use system fonts and bundle every asset
  locally.

## Out of scope

Do not add Next.js, a backend, a database, an API, authentication, a CMS,
Tailwind, or other unnecessary dependencies.

## Development

- `npm install` — install dependencies
- `npm run dev` — start the dev server
- `npm run lint` — lint with oxlint
- `npm run build` — type-check and build to `dist/`

`vercel.json` rewrites every path to `index.html` so client-side routes work
when opened directly or refreshed. Keep it when adding routes.
