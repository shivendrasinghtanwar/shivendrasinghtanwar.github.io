# Shivendra Singh Tanwar — Personal Portfolio

Personal portfolio and resume website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

Live site: https://shivendrasinghtanwar.github.io

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router, static export) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | GitHub Pages via GitHub Actions |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, about, skills, featured projects, contact CTA |
| `/resume` | Resume — experience timeline, education, skills, certifications |
| `/projects` | Projects — filterable card grid with live demo links |

---

## Getting Started

### Prerequisites

- Node.js >= 22 (use `.nvmrc`: `nvm use`)

```bash
nvm use          # switches to Node 22 (from .nvmrc)
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:3000
```

### Build

```bash
npm run build    # static export → out/
```

The `out/` directory is a fully self-contained static site ready for any static host.

---

## Deployment (GitHub Pages)

Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`).

**One-time setup:**
1. Go to **Settings → Pages** in the GitHub repository
2. Set **Source** to **"GitHub Actions"**
3. Push to `master` — the workflow builds and deploys automatically

The workflow:
1. Sets up Node 22
2. Runs `npm ci && npm run build`
3. Copies legacy project demos (`Projects/`) into the build output
4. Deploys the `out/` directory to GitHub Pages

---

## Project Structure

```
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (font, nav, footer)
│   │   ├── globals.css         # Global styles + Tailwind directives
│   │   ├── page.tsx            # Home page
│   │   ├── resume/page.tsx     # Resume page
│   │   └── projects/page.tsx   # Projects page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── data.ts             # All content (experience, projects, skills)
├── Projects/                   # Legacy static project demos (kept for links)
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions CI/CD
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Updating Content

All site content lives in **`src/lib/data.ts`** — edit that file to update:
- Work experience
- Projects
- Skills
- Certifications
- Contact details

---

## Contact

- Email: sunnysinghtanwar2@gmail.com
- GitHub: [@shivendrasinghtanwar](https://github.com/shivendrasinghtanwar)
- LinkedIn: [shivendra-singh-tanwar](https://www.linkedin.com/in/shivendra-singh-tanwar/)
