# NoteHub Next.js

A multi-page notes application built with Next.js App Router, TypeScript,
TanStack Query, and Axios. The notes list and note details routes combine
server-side prefetching with client-side cache hydration and interactions.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add your personal NoteHub API token to `NEXT_PUBLIC_NOTEHUB_TOKEN`.
4. Run `npm run dev` and open `http://localhost:3000`.

## Production

Run `npm run build` to verify a production build. When deploying to Vercel,
add `NEXT_PUBLIC_NOTEHUB_TOKEN` to the project's environment variables.
