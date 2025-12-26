# n8nGalaxy — AI Automation & Chatbot Studio

Next.js App Router project with Tailwind CSS 4 and the “Premium Galaxy Lamp” glassmorphism theme. Phase 1 delivers the marketing shell with MainNav, SiteFooter, and skeleton pages for Home, Solutions, and Contact.

## Getting Started

```bash
npm install
npm run dev -- --hostname 0.0.0.0 --port 3000
```

Open [http://localhost:3000](http://localhost:3000) to view the experience. Update content in `app/page.tsx`, `app/solutions/page.tsx`, and `app/contact/page.tsx`.

## Design System
- Typography: Inter (self-hosted via `next/font/local`)
- Colors: Cyan `#27c5ff` (primary), Gold `#f6c769` (accent), deep navy background
- Utilities: `.glass-card`, `.glass-soft`, `.hover-lift`, `.glow-hover`, gradient text helpers, and `.media-frame` for hero media.

## Scripts
- `npm run dev` – start local development
- `npm run lint` – lint with ESLint
- `npm run build` – production build with Next.js
