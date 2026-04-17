# ONFIT — Modern Gym Website

A sleek, production-ready marketing site for **ONFIT**, a modern training club.
Built with React 18, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## Features

- Cinematic video hero with animated copy
- Scroll-triggered animations (Framer Motion)
- Responsive design (mobile → 4K)
- Masonry-style gallery with lazy loading
- Programs, coaches, pricing, testimonials, and FAQ sections
- Lead-capture contact form with goal selector
- Sticky navbar with smooth scroll + mobile drawer
- Custom design system (dark theme with signature neon-lime brand)
- Code-split bundles (React, Motion, Icons separately cached)

## Stack

| Area        | Tool                                    |
|-------------|-----------------------------------------|
| Framework   | React 18 + TypeScript                   |
| Build       | Vite 5                                  |
| Styling     | Tailwind CSS 3                          |
| Animation   | Framer Motion 11                        |
| Icons       | Lucide React                            |
| Fonts       | Bebas Neue (display) + Inter (sans)     |

## Getting started

```bash
npm install
npm run dev        # dev server on http://localhost:5173
```

## Production

```bash
npm run build      # outputs to /dist
npm run preview    # serves /dist on http://localhost:4173
```

The production build ships ~95 kB of gzipped JS (split into three vendor chunks)
and ~6 kB of gzipped CSS — fully prerendered HTML with no runtime routing.

## Project layout

```
site/
├── public/
│   ├── favicon.svg
│   ├── images/         # 20 studio photos
│   └── videos/         # hero & CTA videos
├── src/
│   ├── components/     # Navbar, Footer, Logo, Marquee
│   ├── sections/       # Hero, About, Programs, Coaches, Gallery, Pricing, Testimonials, CTABanner, Contact
│   ├── data/site.ts    # all site copy & content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css       # Tailwind + design tokens
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Content

All copy, pricing, coaches, testimonials, and FAQs are centralized in
[`src/data/site.ts`](./src/data/site.ts). Swap text and images there.

## Deployment

Any static host works — Netlify, Vercel, Cloudflare Pages, S3+CloudFront, Azure
Static Web Apps. Just upload the contents of `dist/` after `npm run build`.
