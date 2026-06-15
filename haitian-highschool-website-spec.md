# Haitian High School Website — Build Spec

## Overview

Build a modern, responsive, single-page-style website for **Collège Laferrière de Milot**, a high school located in Milot, Haiti (Nord Department, near the historic Citadelle Laferrière). The site should feel clean, confident, and contemporary — not like a dated school template. Think of the energy of a top charter school site in the US but rooted in Haitian identity and culture.

**Primary audience:** Parents, prospective students, and community members — most of whom will access the site on mobile phones with varying connection speeds.

**Languages:** Bilingual — Haitian Creole (Kreyòl) as primary, French as secondary. Include a language toggle in the header. Default to Kreyòl.

---

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion (subtle, purposeful — no gratuitous effects)
- **Icons:** Lucide React
- **Deployment target:** Vercel (or any static-friendly host)
- **No backend for now** — all content is hardcoded/static. Structure the code so content can easily be moved to a CMS later (keep text in a central `content/` or `data/` folder as JSON or TS objects, not scattered in JSX).

---

## Design Direction

### Aesthetic
- **Modern and minimal** with bold typography and generous whitespace
- Hero section with a large, vibrant image or gradient overlay
- Color palette based on the school's official colors (white, gray, light blue):
  - Primary: Light blue `#5BA4CF` (a composed, slightly muted blue — not sky blue)
  - Primary dark: Deeper blue `#3A7CB8` (for hover states and active elements)
  - Neutral dark: Charcoal gray `#3D3D3D` (headings, strong text)
  - Neutral mid: Medium gray `#6B7280` (body text, secondary info)
  - Neutral light: Soft gray `#E5E7EB` (borders, dividers, card backgrounds)
  - Background: Clean white `#FFFFFF` with alternating off-white sections `#F5F7FA`
  - Text: Near-black `#1A1A1A`
- Clean sans-serif font pairing: **Inter** for body, **Plus Jakarta Sans** or **Sora** for headings
- Rounded corners on cards (12–16px), soft shadows, no hard borders
- Mobile-first layout — everything must look great on a 375px screen

### Imagery Guidance
Use placeholder images with descriptive alt text. Mark each with a comment like `{/* REPLACE: photo of students in classroom */}` so it's easy to swap real photos later. Suggest using `next/image` with blur placeholders.

---

## Site Structure (Single Page with Sections + Anchor Navigation)

### 1. **Header / Navigation**
- School logo (placeholder SVG) + "Collège Laferrière de Milot"
- Sticky/fixed header that becomes compact on scroll
- Nav links that smooth-scroll to sections: Akèy (Home), Sou Nou (About), Pwogram (Programs), Enskripsyon (Admissions), Kontak (Contact)
- Language toggle button: KR | FR
- Mobile: hamburger menu with a slide-in drawer

### 2. **Hero Section**
- Full-width, tall hero (min 80vh on desktop, 60vh on mobile)
- Large headline in Kreyòl, e.g.: **"Fòme lidè demen yo, jodi a."** (Forming tomorrow's leaders, today.)
- Subtext: 1–2 sentences about the school's mission
- CTA button: "Enskri Kounye a" (Enroll Now) → scrolls to Admissions section
- Background: gradient overlay on a placeholder image of students

### 3. **About Section (Sou Nou)**
- Brief school history / mission / vision (3–4 short paragraphs, placeholder text)
- Key stats in a horizontal row of animated counters:
  - Ane eksperyans (Years of experience): e.g. 15+
  - Elèv (Students): e.g. 400+
  - Anseyan (Teachers): e.g. 30+
  - To reyisit (Pass rate): e.g. 92%
- Optional: a small quote/testimonial card from a parent or alumni

### 4. **Programs Section (Pwogram)**
- Card grid (2 columns desktop, 1 column mobile)
- Each card: icon + title + short description
- Placeholder programs:
  - Syans ak Matematik (Science & Math)
  - Literati ak Lang (Literature & Languages)
  - Teknoloji ak Enfòmatik (Technology & Computer Science)
  - Atizay ak Kilti (Arts & Culture)
  - Espò ak Edikasyon Fizik (Sports & Phys Ed)
  - Lidèchip ak Sivik (Leadership & Civics)
- Cards should have a subtle hover lift effect

### 5. **School Life / Gallery Section (Lavi Lekòl)**
- Masonry or grid photo gallery (use placeholder colored divs or stock images)
- 6–8 image slots with captions
- Light fade-in animation on scroll

### 6. **Admissions Section (Enskripsyon)**
- Clean info block explaining the enrollment process in 3–4 numbered steps:
  1. Ranpli fòm nan (Fill out the form)
  2. Soumèt dokiman yo (Submit documents)
  3. Entèvyou (Interview)
  4. Konfirmasyon (Confirmation)
- A simple contact/interest form:
  - Fields: Non konplè (Full name), Nimewo telefòn (Phone), Imel (Email — optional), Klas (Grade level — dropdown), Mesaj (Message — textarea)
  - Submit button: "Voye" (Send)
  - For now the form doesn't need a backend — just show a success toast/message on submit. Add a comment: `{/* TODO: connect to backend or email service */}`

### 7. **Contact Section (Kontak)**
- School address, phone number, email (all placeholder)
- Embedded Google Map placeholder (use an iframe centered on Milot, Haiti or a styled placeholder box)
- Social media icon links: Facebook, Instagram, WhatsApp (these are the most relevant platforms in Haiti)
- Operating hours

### 8. **Footer**
- School name (Collège Laferrière de Milot), motto, copyright year
- Repeat nav links
- "Fèt ak ❤️ an Ayiti" (Made with ❤️ in Haiti)

---

## Functional Requirements

### Performance
- Target Lighthouse score: 90+ on mobile
- Lazy load all images
- Minimize JavaScript bundle — avoid heavy libraries
- Use `next/font` for font loading optimization
- Serve responsive images at appropriate sizes

### Accessibility
- Semantic HTML throughout (header, nav, main, section, footer)
- All interactive elements keyboard-navigable
- ARIA labels on icon-only buttons
- Color contrast meets WCAG AA
- Focus indicators on all interactive elements
- Skip-to-content link

### Bilingual Support
- Create a simple context provider or hook (`useLanguage`) that toggles between `kr` and `fr`
- Store all UI text in a `content/translations.ts` file structured like:
```ts
export const translations = {
  kr: {
    nav: { home: "Akèy", about: "Sou Nou", ... },
    hero: { headline: "Fòme lidè demen yo, jodi a.", ... },
    ...
  },
  fr: {
    nav: { home: "Accueil", about: "À Propos", ... },
    hero: { headline: "Former les leaders de demain, aujourd'hui.", ... },
    ...
  }
}
```

### SEO
- Proper meta tags (title, description) in both languages
- Open Graph tags for social sharing
- Structured data (School Organization schema)

---

## File Structure (suggested)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Programs.tsx
│   ├── Gallery.tsx
│   ├── Admissions.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── LanguageToggle.tsx
│   ├── StatCounter.tsx
│   └── MobileNav.tsx
├── content/
│   └── translations.ts
├── context/
│   └── LanguageContext.tsx
├── hooks/
│   └── useLanguage.ts
└── lib/
    └── constants.ts   (colors, school info, social links)
```

---

## Placeholder Content Notes

Use realistic-sounding placeholder content — not lorem ipsum. Write actual Kreyòl and French text that sounds like a real school would write it. The school name is **"Collège Laferrière de Milot"** — this is a real school based in Milot, Haiti (near the Citadelle Laferrière). The motto can be a placeholder like **"Edikasyon se kle lavni"** (Education is the key to the future) — update later if the school has an official one.

---

## What NOT to Build (Keep It Simple for V1)

- No blog or news feed
- No student/parent login portal
- No payment or fee system
- No database or CMS integration
- No dark mode (can add later)
- No multi-page routing — keep it as a single scrollable page with anchor sections

---

## Future Enhancements (V2+)

- Connect form to an email service (Resend, EmailJS, or a serverless function)
- Add a CMS (Sanity, Payload, or simple Markdown files) for announcements
- Student/parent portal with grades
- Online application form with document upload
- Event calendar
- Dark mode toggle
- Kreyòl / French / English trilingual support
