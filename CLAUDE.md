# CLAUDE.md — Project Intelligence

## Project

Personal portfolio for **Shivendra Singh Tanwar** — a Software Engineer based in Hyderabad, India.
Live: https://shivendrasinghtanwar.github.io

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`) |
| Node | >= 22 (pinned in `.nvmrc`) |

**All content** (experience, projects, skills, contact) lives in `src/lib/data.ts` — edit there first.

---

## Design Context

### Users
Recruiters, hiring managers, and engineering leads who land on the site when evaluating Shivendra for a role. They're busy professionals making a quick judgment — within seconds they decide whether to read further or bounce. Secondary audience: peers and collaborators from the open-source / engineering community.

**Job to be done:** Instantly establish credibility and technical taste so the visitor books the interview.

### Brand Personality
**Bold · Creative · Modern**

Shivendra is not a generic candidate — the site must signal that. The aesthetic should feel like it was designed by someone who cares deeply about craft, not just assembled from a template. Think product-grade design applied to a personal brand.

### Aesthetic Direction
- **Reference:** Awwwards-calibre creative portfolios — intentional use of motion, confident typography, layouts that surprise without sacrificing readability.
- **Emotion to evoke:** *"Wow, this person is sharp — I should hire them."* Professional credibility delivered through high-craft visuals, not corporate flatness.
- **Anti-reference:** Over-engineered dev blogs — sites that signal "I wrote a lot of code" but show zero design care. Avoid walls of monospace text, raw markdown dumps, or "just a CV" energy.
- **Theme:** Dark by default (bg `#030712`), indigo/violet gradient accent system, aurora animated background, floating particles, custom cursor.

### Design Principles

1. **Craft is the message.** Every detail — cursor animation, card hover, transition timing — signals engineering taste. Nothing is an afterthought.

2. **Bold typography first.** Headlines should command attention. Use scale, weight, and gradient text to create hierarchy. Don't be timid with font sizes.

3. **Motion with purpose.** Animate to guide attention and add delight — not to show off. Scroll-triggered reveals, page transitions, magnetic buttons. Never let motion distract from content.

4. **Confident, not crowded.** White space is confidence. Resist adding more sections. Each element earns its place.

5. **Dark, premium, technical.** The dark palette with indigo/violet accents should feel like a premium product UI — Linear, Vercel, or Raycast — not a GitHub README.

---

## Key Conventions

- **No nickname:** Always "Shivendra Singh Tanwar" — never "Sunny" on the site.
- **Initials logo:** `SST` used as the navbar brand mark.
- **Content updates:** Edit `src/lib/data.ts` — the current job is marked `current: true` there (Paytm removed; add new role when ready).
- **Building:** `nvm use && npm run build` — static output in `out/`.
- **Deploy:** Push to `master` — GitHub Actions handles the rest (requires Pages source set to "GitHub Actions" in repo settings).
