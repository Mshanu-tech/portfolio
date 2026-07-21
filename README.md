# Muhammed Shanu A — Portfolio

An Awwwards-style personal portfolio for a Full Stack MERN Developer, built with:

- React 19 + Vite
- Tailwind CSS v4
- Framer Motion (scroll reveals, magnetic buttons, tilt cards)
- GSAP (loading screen intro)
- Lenis (smooth scroll)
- lucide-react + react-icons

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Customization changelog (this pass)

Content, images and metadata were updated from Muhammed Shanu A's CV and photo, on top of the original template — architecture, animations and design system were preserved.

- **Content** (`src/data/portfolioData.js`): real name, role, contact info (email/phone/location), real GitHub (`Mshanu-tech`) and LinkedIn URLs, About text rewritten from the CV summary, education/experience timeline (BCA at IGNOU · Bridgeon Solutions internship · Higher Secondary), skills re-categorized from the CV (Frontend/Backend/Database/Tools/Languages, including Java & C), and all 6 real featured projects (CloudQlobe, Voxentrax, Giant VoIP, Mariyaam Telecom, Gym Management System, Car Parking Management).
- **Stats/achievements**: replaced invented numbers with figures that trace back to the CV/GitHub (6+ projects, 43+ public GitHub repos, 11-month internship, 15+ technologies) instead of fabricated client/contribution counts.
- **Testimonials section removed**: the original template shipped with fictional client quotes attributed to made-up names. Since there's no real testimonial data in the CV, the section (and its data) was removed rather than left as fake content.
- **Photo**: the uploaded photo was color/brightness-corrected and cropped into three optimized assets — `public/images/profile-hero.jpg` (hero), `public/images/profile-avatar.jpg` (navbar, footer, About), `public/og-image.jpg` (social preview) — and wired in everywhere the template previously showed an "MS" placeholder.
- **Resume**: the uploaded PDF is now served at `public/resume.pdf`, matching the existing "Download CV" button.
- **SEO**: added Person JSON-LD structured data, fixed the OG/Twitter image file extension, and added `public/sitemap.xml` (already referenced by `robots.txt`).
- **Projects UI**: "Live Demo" links are hidden when no real deployed URL exists yet (all project entries currently point `demo` at `"#"` since no live URLs were provided) — GitHub links point to the real GitHub profile in the meantime. Update `demo`/`github` per project in `portfolioData.js` once live/repo links are available.
- Verified with `npm run build` (succeeds) and `npm run lint` (0 warnings/errors).

## Project structure

```
src/
  components/   shared UI (Navbar, Footer, buttons, cursor, cards...)
  sections/     one file per page section (Hero, About, Skills, Projects...)
  hooks/        useLenis, useCountUp, useMousePosition
  data/         portfolioData.js — all site copy, links & content in one place
  App.jsx       assembles all sections, lazy-loads below-the-fold ones
  main.jsx      React entry point
  index.css     design tokens (colors/fonts), glass/aurora/glow effect classes
public/
  images/       drop your real photos here (see below)
  favicon.svg
```

## Personalizing content

Everything text-based (name, bio, skills, projects, services, testimonials,
timeline, contact info, social links) lives in **`src/data/portfolioData.js`**.
Edit that one file to update the whole site.

## Adding your real photo

The hero currently shows a placeholder "MS" monogram instead of a photo.
To use a real photo:

1. Add your image to `public/images/hero.jpg`
2. Open `src/sections/Hero.jsx` and replace the placeholder `<div>` block
   (marked with a comment) with an `<img src="/images/hero.jpg" ... />` tag

Project thumbnails work the same way — add images to `public/images/` and
reference them from `src/data/portfolioData.js`, then swap the placeholder
icon block in `src/sections/Projects.jsx` for an `<img>`.

## Contact form

The form in `src/sections/Contact.jsx` currently simulates a submit.
Wire it up to a real backend or a service like Formspree, EmailJS, or your
own API route by replacing the `handleSubmit` function.

## Resume

Add your resume PDF at `public/resume.pdf` — the "Download CV" button
already points there.

## Notes

- Fully responsive, mobile has a bottom tab bar + floating WhatsApp button
- Respects `prefers-reduced-motion`
- Below-the-fold sections are code-split (lazy loaded) for a lean initial bundle
