# Rohit Jha — Portfolio

A personal portfolio built with Next.js (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Edit your content

All text (summary, experience, projects, skills, education) lives in one file:

```
lib/data.ts
```

Change values there and the whole site updates. Replace `public/Rohit-Jha-Resume.pdf`
with your latest resume to update the Resume button.

## Deploy

Push to GitHub and import the repo at vercel.com. Zero config — Vercel detects Next.js
automatically and gives you a live URL.

## Structure

```
app/          layout, global styles, page
components/    Navbar, Hero, About, Experience, Projects, Skills, Education, Contact, Footer
lib/data.ts   all editable content
public/        resume PDF + static assets
```
