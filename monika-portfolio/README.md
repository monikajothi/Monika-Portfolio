# Monika Jothi — Portfolio

A production-grade personal portfolio built with **Vite + React + Tailwind CSS**.
Dark-mode first, fully responsive, animated, and zero runtime dependencies beyond React.

---

## Tech Stack

| Layer       | Choice                          |
|-------------|---------------------------------|
| Build tool  | Vite 5                          |
| UI          | React 18                        |
| Styling     | Tailwind CSS 3 + custom CSS     |
| Fonts       | Syne · Space Mono · DM Sans (Google Fonts) |
| Animations  | CSS keyframes + IntersectionObserver |

---

## Project Structure

```
monika-portfolio/
├── index.html                  # HTML entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                # React entry
    ├── App.jsx                 # Root component — wires all sections
    │
    ├── data/
    │   └── portfolio.js        # ★ ALL content lives here — edit to personalise
    │
    ├── hooks/
    │   ├── useScrollReveal.js  # IntersectionObserver-based reveal hooks
    │   └── useMouse.js         # Mouse-parallax hook (hero glow)
    │
    ├── utils/
    │   └── cn.js               # Lightweight className joiner
    │
    ├── styles/
    │   └── globals.css         # Tailwind + custom CSS (reveal, keyframes, components)
    │
    └── components/
        ├── layout/
        │   ├── Navbar.jsx      # Fixed nav with mobile hamburger
        │   └── Footer.jsx
        │
        ├── ui/
        │   ├── Avatar.jsx      # Animated SVG avatar
        │   └── SectionHeader.jsx
        │
        └── sections/
            ├── Hero.jsx
            ├── About.jsx
            ├── Skills.jsx
            ├── Experience.jsx
            ├── Projects.jsx
            ├── Certifications.jsx
            ├── Achievements.jsx
            └── Contact.jsx
```

---

## Quick Start

```bash
# 1. Clone / unzip the project
cd monika-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server  →  http://localhost:5173
npm run dev

# 4. Production build  →  dist/
npm run build

# 5. Preview the build
npm run preview
```

Node.js ≥ 18 recommended.

---

## Personalising Content

**All content is in one file: `src/data/portfolio.js`.**

Edit the exported objects:

| Export         | What it controls                                |
|----------------|-------------------------------------------------|
| `meta`         | Name, email, GitHub, LinkedIn, resume URL       |
| `about`        | About paragraphs + terminal lines               |
| `skills`       | Skill cards and tags                            |
| `experience`   | Work/education timeline items                   |
| `projects`     | Project cards (title, stack, links, impact)     |
| `certifications` | Cert/publication cards                        |
| `achievements` | Award list                                      |
| `navLinks`     | Navigation links                                |

### Adding your resume

Replace `resumeUrl: '#'` in `meta` with the public URL of your PDF (e.g. hosted on GitHub or Google Drive).

---

## Responsive Breakpoints

| Name  | Width    | Notes                          |
|-------|----------|--------------------------------|
| `sm`  | ≥ 640 px | 2-col skill/cert grids         |
| `md`  | ≥ 768 px | Desktop nav, 2-col about/contact |
| `lg`  | ≥ 1024 px | Avatar visible in hero         |
| `xl`  | ≥ 1280 px | Ultra-wide layouts             |

---

## Deployment

The output of `npm run build` is a static `dist/` folder — deploy to any static host:

- **Vercel**: `vercel --prod`
- **Netlify**: drag-and-drop `dist/` in the Netlify UI, or `netlify deploy --prod`
- **GitHub Pages**: push `dist/` to a `gh-pages` branch

---

## License

Personal portfolio — feel free to adapt for your own use.
