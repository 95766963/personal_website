# Google Stitch Design Brief — Stone's Personal Portfolio

## 1. Project Goal

Design a distinctive, production-ready personal portfolio website for **Stone**, a Vancouver-based full-stack developer and AI application engineer.

The website should present Stone's capabilities, projects, and professional story to:

- Recruiters and technical interviewers
- Potential clients and collaborators

The experience should feel futuristic, technically sophisticated, and memorable, while remaining easy to scan. A recruiter must be able to understand who Stone is, what he builds, and where to view his work within a few seconds.

This is not a résumé download website. The website itself should function as Stone's living résumé and professional introduction.

## 2. Language and Content Rules

- All visible interface copy must be in English.
- Do not invent employers, dates, education details, project metrics, testimonials, awards, client names, or links.
- Clearly preserve placeholders marked with square brackets for later replacement.
- Do not display nationality.
- Do not display “Available for work” or a similar status badge.
- The About page may state: **“Based in Vancouver and authorized to work in Canada.”**
- Do not add a résumé download button or résumé PDF link.
- Do not show Blog in the primary navigation for the initial release.

## 3. Creative Direction

Create a **dark, futuristic technology aesthetic** with a strong AI atmosphere and refined motion design.

The experience may draw inspiration from:

- https://peteroravec.com/ — immersive exploration, personality, and strong visual identity
- https://ddaniel.dev/ — developer-oriented terminal language and an animated introduction

Use these references only as directional inspiration. Do not copy their layouts, interactions, illustrations, game mechanics, or visual assets.

### Desired balance

- Futuristic and immersive, but not confusing
- Visually expressive, but still credible for professional hiring
- Developer-oriented, but understandable to non-technical visitors
- Animation-rich on desktop, lightweight and straightforward on mobile
- Strong personality without looking like a generic cyberpunk or AI template

### Avoid

- Full-screen game navigation or a game map
- Long terminal sequences that delay access to content
- Excessive neon glow
- Large purple-and-blue gradients commonly associated with generic AI products
- Heavy glassmorphism
- Decorative charts with no meaning
- Dense walls of text
- Autoplay audio
- Custom cursors that reduce usability
- Horizontal scrolling for primary content
- Hidden navigation or interactions that require discovery

## 4. Visual System

### Color palette

- Primary background: near-black, such as `#0A0A0B` or `#111113`
- Elevated surface: subtly lighter dark gray
- Primary text: soft off-white, around `#F5F5F5`
- Secondary text: accessible cool gray
- Primary accent: teal/cyan, around `#2DD4BF`
- Optional secondary accent: restrained electric blue
- Borders: thin, low-contrast, cool-toned lines

Maintain WCAG AA contrast for essential text and controls.

### Typography

- Primary typeface: Geist, Inter, or a similarly clean sans-serif
- Optional monospace typeface for small technical labels, metadata, or terminal-inspired details
- Use large, confident display typography in the Hero
- Keep body text highly readable with comfortable line length

### Brand mark

Use a minimal text-based **`S.`** mark in the navigation and favicon concept. It should feel precise and modern, not like a complex standalone logo.

### Abstract visual language

Build the visual identity around subtle representations of intelligent systems:

- Connected nodes and data paths
- Vector-like particles
- Layered grids or coordinate lines
- Small system labels and technical annotations
- A restrained terminal cursor or command prompt motif

These elements should support the composition rather than obscure content. Do not use a human portrait.

## 5. Site Architecture

Design the following initial-release pages:

```text
/                 Home
/projects         Projects
/projects/[slug]  Project Detail
/about            About
/contact          Contact
```

Future Blog routes may be considered in the design system, but do not create a Blog navigation item or an empty Blog page for the initial release.

## 6. Global Navigation and Footer

### Desktop navigation

- Left: `S.` brand mark, linking to Home
- Right: Home, Projects, About, Contact
- Clearly indicate the current page
- Sticky or gently floating navigation is acceptable if it remains subtle

### Mobile navigation

- Compact header with `S.` and an accessible menu button
- Full-screen or contained menu panel with large tap targets
- Do not reproduce complex desktop motion inside the mobile menu

### Footer

Keep the footer minimal:

- `S.` or `Stone`
- Short line such as `Designed and built by Stone.`
- Copyright year may be dynamic
- Navigation links
- Do not invent social links or contact details

## 7. Home Page

### 7.1 Hero

The Hero must immediately communicate Stone's role.

#### Primary copy

Eyebrow:

`Vancouver, Canada · Full-Stack + AI`

Headline:

`Full-Stack Developer & AI Application Engineer`

Supporting statement:

`I build polished web experiences and intelligent applications—from responsive frontends and scalable backends to RAG systems and AI agents.`

Primary actions:

- `View Projects`
- `Contact Me`

Optional small technical label:

`stone@portfolio:~$ building useful systems`

Do not add an availability badge. Do not mention nationality or immigration status in the Hero.

#### Hero composition

- No portrait
- Use oversized typography with an abstract AI/data-system visual
- Consider an interactive network, orbit, particle field, or layered technical grid
- The Hero should feel cinematic on desktop without delaying access to the primary CTAs
- A very short terminal-style initialization may be used, but the page must remain immediately navigable and provide a visible `Skip animation` control if the animation blocks content

### 7.2 Capabilities / Skills

Present the skill set as four concise groups. Use icons or compact technical labels rather than long descriptions.

#### Frontend

- TypeScript
- React
- Next.js
- Tailwind CSS
- Framer Motion

#### Backend

- Node.js
- Express
- REST APIs
- PostgreSQL
- Supabase

#### AI Engineering

- Python
- LLM APIs
- RAG
- Embeddings
- Vector Databases
- AI Agents
- Structured Output

#### Tools and Delivery

- Git
- GitHub
- Docker
- Vercel
- Postman
- Figma

The section should communicate breadth without implying proficiency ratings. Do not use percentage bars or arbitrary skill scores.

### 7.3 Featured Projects

Show three project cards in a strong editorial or asymmetric layout.

#### Project 01 — Panda

- Category: `[TO BE CONFIRMED]`
- One-line summary: `[PROJECT SUMMARY TO BE PROVIDED]`
- Technologies: `[TECH STACK TO BE PROVIDED]`
- Screenshot: `[PROJECT IMAGE TO BE PROVIDED]`
- Repository: `[GITHUB URL TO BE PROVIDED]`
- Demo/video: `[OPTIONAL URL TO BE PROVIDED]`

#### Project 02 — PC Troubleshooting RAG

- Category: `AI / RAG`
- One-line summary: `[PROJECT SUMMARY TO BE PROVIDED]`
- Technologies: `[TECH STACK TO BE PROVIDED]`
- Screenshot: `[PROJECT IMAGE TO BE PROVIDED]`
- Repository: `[GITHUB URL TO BE PROVIDED]`
- Demo/video: `[OPTIONAL URL TO BE PROVIDED]`

#### Project 03 — Coming Soon

Use a polished placeholder card that reads:

`New project in development.`

The card should feel intentional, not empty, and should not link to a detail page until project information exists.

Each completed project card should contain:

- Project image or designed placeholder
- Project title
- One-sentence explanation
- Compact technology tags
- Clear detail-page affordance

Do not fabricate project details or performance claims.

### 7.4 Short Introduction

Suggested copy:

`I'm Stone, a developer based in Vancouver. I work across frontend, backend, and applied AI to turn ideas into useful, well-crafted products. My experience building a computer business shaped the practical, problem-first approach I bring to software.`

Add a text link: `More about me →`

### 7.5 Closing CTA

Use a strong but concise closing section:

Headline:

`Have a product, problem, or idea worth building?`

Action:

`Contact Me`

Do not claim current availability.

## 8. Projects Page

Create a clean project index without category filters.

Page introduction:

`Selected work across web development and applied AI.`

Requirements:

- Show all project cards in a responsive grid or editorial list
- Keep scanning easy; do not hide essential information behind hover
- Include the intentional third-project placeholder until its content is ready
- Use consistent tags and image ratios
- Completed project cards link to their detail pages
- Do not create filters, search, pagination, or sorting for the initial version

## 9. Project Detail Template

Design a reusable, concise project-detail layout.

Required sections:

1. Project title and one-sentence summary
2. Large project screenshot or preview
3. Brief overview: what was built and what problem it solves
4. Technology tags
5. External actions when available:
   - `View GitHub`
   - `Watch Demo`
   - `Visit Live Site`
6. Previous/next project navigation or a simple `Back to Projects` link

Do not add long fictional case studies, invented business results, client quotes, or fabricated development challenges.

## 10. About Page

The About page should tell a concise professional story without presenting a downloadable résumé.

### Suggested opening

`I'm Stone, a full-stack developer and AI application engineer based in Vancouver.`

### Professional story

Use this structure, retaining placeholders until exact education information is supplied:

`After graduating from Simon Fraser University with [EXACT DEGREE NAME] in [GRADUATION YEAR], I built and operated a computer business. That experience taught me to understand real customer problems, make practical decisions, and take ownership from idea to delivery. I later transitioned into software and AI development, where I now build modern web products, RAG systems, and agent-based applications.`

Supporting statement:

`Based in Vancouver and authorized to work in Canada.`

Do not name the computer business. Do not mention nationality.

### Capabilities

Repeat or expand the four skill groups from the Home page with brief, grounded descriptions. Do not add proficiency percentages.

### Principles

Optionally present three short working principles:

- `Build for the real problem.`
- `Keep systems clear and maintainable.`
- `Use AI with judgment, not as a substitute for it.`

### About page CTA

End with links to `View Projects` and `Contact Me`.

Do not include a résumé download.

## 11. Contact Page

Design a focused contact page with an inviting but professional tone.

Suggested headline:

`Let's build something useful.`

Supporting copy:

`Have a project, collaboration, or role you'd like to discuss? Send me a message and I'll get back to you.`

### Form fields

- Name
- Email
- Message
- Submit button: `Send Message`

Use Formspree-compatible form behavior in the eventual implementation.

Include designs for:

- Default state
- Keyboard focus state
- Validation error state
- Submitting state
- Success confirmation
- Submission failure state

Do not display GitHub, LinkedIn, phone, or a public email until those details are supplied. Leave a well-structured optional area in the design system so direct contact links can be added later without redesigning the page.

## 12. Motion and Interaction

Motion is a defining part of the desktop experience, but usability and accessibility take priority.

### Desktop

- Use scroll-progress-driven scale, opacity, depth, or parallax in the Hero
- Reveal sections with restrained transitions
- Animate the abstract AI visual in response to pointer position or scroll when appropriate
- Use small, responsive hover states on buttons, project cards, and navigation
- Keep motion smooth and purposeful; avoid constant visual noise

### Mobile

- Replace complex scroll-driven sequences with simple fade-and-rise reveals
- Avoid pinned sections that fight touch scrolling
- Avoid heavy particle counts, pointer effects, or continuous parallax
- Ensure content remains readable and controls remain easy to tap

### Reduced motion

Respect `prefers-reduced-motion`.

When reduced motion is enabled:

- Disable large translations, scaling, parallax, and animated camera effects
- Show content immediately or use a minimal opacity transition
- Never require animation to understand or access content

## 13. Responsive and Accessibility Requirements

Provide responsive designs for at least:

- Desktop: approximately 1440 px
- Tablet: approximately 768 px
- Mobile: approximately 390 px

Requirements:

- Semantic heading hierarchy
- Visible keyboard focus states
- Large touch targets
- Accessible form labels and errors
- WCAG AA color contrast
- Content and controls must not rely on hover alone
- Navigation must work with keyboard and screen readers
- Decorative motion must not interfere with reading
- Images must have a clear place for meaningful alt text in implementation

## 14. Reusable Components and States

Create a consistent component system for:

- Primary and secondary buttons
- Text links
- Navigation links and active states
- Project cards
- Technology tags
- Section labels
- Form inputs and text areas
- Loading/submitting states
- Empty or coming-soon project state
- Mobile menu
- Footer

Include default, hover, focus, active, and disabled states where relevant.

## 15. Supporting Screens and Metadata

Also define:

- A branded 404 page with `Return Home`
- Favicon direction based on the `S.` mark
- Open Graph preview card using Stone's name, title, and abstract AI visual
- Page title and description patterns

Suggested homepage metadata:

- Title: `Stone — Full-Stack Developer & AI Application Engineer`
- Description: `Stone builds polished web experiences and intelligent applications, from modern full-stack products to RAG systems and AI agents.`

## 16. Future Blog Extension — Do Not Include in Initial Navigation

The visual system should be extensible to future Blog and Article pages, but the initial design should not include an empty Blog route or navigation item.

Potential future topics include:

- Finding a PostgreSQL transaction bug in AI-generated code
- Moving from prompt engineering to structured output
- Why UX wireframes should come before implementation

## 17. Implementation Context

The design will eventually be implemented with:

- Next.js
- TypeScript
- Framer Motion
- MDX for future blog content
- Formspree
- Vercel
- Vercel Analytics

Design components, spacing, and interactions so they can be implemented cleanly in this stack. Avoid visual concepts that depend on proprietary 3D assets or unusually heavy rendering frameworks.

## 18. Expected Stitch Output

Produce a coherent responsive website design rather than isolated concept art.

Include:

1. Home page
2. Projects index
3. Reusable project-detail page
4. About page
5. Contact page
6. Mobile versions of the core pages
7. Core reusable components and interaction states
8. A lightweight visual direction for the 404 page and Open Graph card

Prioritize the Home page first. Preserve all bracketed placeholders and do not invent missing personal or project information.
