# Md. Rafiul Islam — Engineering Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-rafitboo.vercel.app-A4D8FF?style=for-the-badge&logo=vercel&logoColor=black)](https://rafitboo.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-performance, interactive personal engineering portfolio built with Next.js (App Router), Tailwind CSS, Framer Motion, and Web Audio API primitives. Designed around an icy blue/gunmetal hardware aesthetic with server-side rendered metadata, Open Graph optimization, and client-side interactive modules.

---

## ⚡ Live Preview

Explore the live site: **[https://rafitboo.vercel.app/](https://rafitboo.vercel.app/)**

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (v4), Custom Grid Background, CSS Keyframe Glitch Effects
* **Animations:** Framer Motion (layout pill animations, spring transitions)
* **Interactive Canvas:** HTML5 2D Canvas API (interactive particle/neural network graph)
* **Audio Engine:** Web Audio API (synthesized mechanical typing and command execution beeps)
* **Typography:** Inter (via `next/font/google`)
* **Analytics & Performance:** `@vercel/analytics`, `@vercel/speed-insights`
* **Deployment:** Vercel

---

## ✨ Key Features

* **Interactive CLI Terminal:** Fully functional client-side mock terminal with history tracking, custom command parsing (`help`, `about`, `skills`, `ping`, `quote`, `clear`), and synthesized Web Audio feedback.
* **Neural Network Background:** Hardware-accelerated canvas background tracking mouse velocity and pointer proximity without impacting the main thread.
* **Custom Physics Cursor:** Dual-layer spring-trailing custom cursor disabled on mobile/touch interfaces for clean ergonomics.
* **Server-Driven SEO & Open Graph:** Pre-rendered HTML shells with automated metadata, dynamic Open Graph cards (`1200x630`), and Twitter summary cards for link unfurling.
* **Decoupled Architecture:** Strict separation between Server Components (page metadata, static content) and Client Components (`ClientProviders`, interactive UI controls).

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18.18.0 or higher
* npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
 ```bash
 git clone [https://github.com/rafitboo/portfolio.git](https://github.com/rafitboo/portfolio.git)
 cd portfolio

```

2. **Install dependencies:**
```bash
npm install

```


3. **Run the local development server:**
```bash
npm run dev

```


4. **View locally:**
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
├── public/
│   ├── og-image.png           # 1200x630 Open Graph preview card
│   ├── rafitboo_logo.png      # Site icon / favicon
│   └── resume.pdf             # Static resume document
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind directives, theme variables, scrollbar styles
│   │   ├── layout.tsx         # Root layout, fonts, metadata, and analytics
│   │   ├── page.jsx           # Vertical section stacking (Hero, Projects, Experience, FAQ)
│   │   └── template.jsx       # Route-level transition hooks & audio cues
│   ├── components/
│   │   ├── ClientProviders.jsx # Dynamic ssr:false wrapper for canvas & cursor
│   │   ├── CustomCursor.jsx    # Spring-damped dual-ring cursor
│   │   ├── Hero.jsx            # Two-column landing hero & dynamic introduction
│   │   ├── Navbar.jsx          # Morphing navigation pill with Framer LayoutGroup
│   │   ├── ParticlesBackground.jsx # HTML5 2D Canvas neural network
│   │   ├── Projects.jsx        # Project showcases & external repository links
│   │   ├── Terminal.jsx        # Interactive command-line interface
│   │   ├── Experience.jsx      # Interactive timeline
│   │   ├── FAQ.jsx             # Collapsible technical Q&A accordion
│   │   └── Footer.jsx          # Social anchors and legal copyright
│   └── utils/
│       └── sound.js            # Synthesized Web Audio API sound generator
├── package.json
└── next.config.mjs

```

---

## 📬 Contact

* **Website:** [https://rafitboo.vercel.app](https://www.google.com/search?q=https://rafitboo.vercel.app)
* **GitHub:** [@rafitboo](https://www.google.com/search?q=https://github.com/rafitboo)
* **LinkedIn:** [rafitboo](https://www.google.com/search?q=https://linkedin.com/in/rafitboo/)
* **Email:** [rafit991@gmail.com](https://www.google.com/search?q=mailto%3Arafit991%40gmail.com)
