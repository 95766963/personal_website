---
name: Synthetic Intelligence
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#bacac5'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#859490'
  outline-variant: '#3c4a46'
  surface-tint: '#3cddc7'
  primary: '#57f1db'
  on-primary: '#003731'
  primary-container: '#2dd4bf'
  on-primary-container: '#00574d'
  inverse-primary: '#006b5f'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffd1aa'
  on-tertiary: '#4b2800'
  tertiary-container: '#ffac5a'
  on-tertiary-container: '#744000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#62fae3'
  primary-fixed-dim: '#3cddc7'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005047'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdcc0'
  tertiary-fixed-dim: '#ffb875'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
  surface-elevated: '#111113'
  text-primary: '#F5F5F5'
  text-secondary: '#A1A1AA'
  border-low: '#1E1E21'
  accent-glow: rgba(45, 212, 191, 0.15)
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  technical-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  terminal-small:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 120px
---

## Brand & Style

The design system is engineered to project a professional, technical, and immersive aesthetic for a high-end personal portfolio. It draws inspiration from **Minimalism** and **Modern Technology** interfaces, prioritizing high-fidelity details and functional clarity.

The emotional response should be one of sophisticated technical mastery—feeling like a high-end terminal or an advanced OS. The aesthetic utilizes a "Deep Space" approach: heavy reliance on darkness to create infinite depth, punctuated by vibrant, neon-inflected data points. 

**Core Principles:**
- **Technical Precision:** Every element should feel measured and intentional.
- **Immersive Depth:** Use of layering and subtle glow to create a three-dimensional digital environment.
- **Data-Driven:** Use of metadata, coordinates, and monospaced accents to emphasize a "developer" persona.

## Colors

The palette is anchored in a near-black monochromatic base to maximize contrast with the neon accents. 

- **Primary Accent (#2DD4BF):** Used for primary actions, success states, and key interactive highlights. It represents the "active code" or "system status."
- **Secondary Accent (#3B82F6):** Reserved for subtle variety in data visualization or secondary interactive elements. It should be used sparingly to maintain the Teal dominance.
- **Neutral Stack:** The background hierarchy moves from `#0A0A0B` (Base) to `#111113` (Containers). Borders at `#1E1E21` provide a structural framework without breaking the immersion of the dark theme.

## Typography

This design system utilizes a dual-type strategy. **Geist** provides a clean, ultra-modern sans-serif foundation for headlines and primary reading, offering a balance between Swiss-style minimalism and technical geometric construction.

**JetBrains Mono** is used for all "Meta" information—tags, timestamps, code snippets, and coordinate markers. This creates a clear visual distinction between the "Content" (Geist) and the "System" (JetBrains Mono).

Large display titles should use tight letter-spacing to feel "industrial," while monospaced labels should use increased letter-spacing for a "serialized" data look.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. 

**Grid Accents:**
To reinforce the technical theme, use a background "blueprint" grid. This is a subtle overlay of `#1E1E21` lines spaced at 40px intervals, with a lower opacity (0.05) to ensure it does not compete with content.

**Spacing Rhythm:**
Spacing follows a strict 4px base unit. Section gaps are intentionally large (120px+) to allow the typography to breathe and to emphasize the "minimalist" aspect of the brand. Horizontal margins should be generous on desktop to create a centered, editorial column of focus.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Luminescence** rather than traditional shadows.

- **Level 0 (Base):** `#0A0A0B` - The infinite background.
- **Level 1 (Surface):** `#111113` - Used for cards and containers. These should have a 1px border of `#1E1E21`.
- **Level 2 (Interaction):** Elements being hovered should gain a subtle `0 0 20px rgba(45, 212, 191, 0.1)` glow rather than a drop shadow.

**Technical Accents:**
Use "Coordinate Markers"—small `+` shapes or line-intersections at the corners of containers—to imply a HUD-like construction.

## Shapes

The design system uses **Soft (0.25rem)** roundedness. This subtle curve prevents the UI from feeling too "aggressive" or "retro-brutalist," maintaining a modern, high-end tech feel. 

- **Primary Buttons:** 0.25rem (Soft)
- **Cards/Containers:** 0.5rem (Large)
- **Tags/Chips:** 0.25rem (Small)

Avoid pill-shaped buttons; the rectangular form factor with small radii feels more aligned with technical blueprints and professional hardware interfaces.

## Components

### Buttons
- **Solid Teal:** Background `#2DD4BF`, Text `#0A0A0B`. On hover, add a 15px outer glow of the primary color.
- **Ghost:** Border 1px `#2DD4BF`, Text `#2DD4BF`. Background is transparent. Hover fills the background with a 10% opacity version of teal.
- **Command Style:** Small monospaced label above the button indicating a shortcut (e.g., `[ENTER]`).

### Project Cards
- Use an editorial layout. The top section contains a technical metadata bar (e.g., `SCOPE: WEB_GL`, `YEAR: 2024`) in **JetBrains Mono**.
- The card background is `#111113` with a thin `#1E1E21` border.
- Images within cards should have a slight desaturation, returning to full color only on hover.

### Form Inputs
- Background: `#0A0A0B`.
- Border: 1px `#1E1E21`.
- Focus State: Border changes to `#2DD4BF` with a small flashing "terminal cursor" vertical line at the end of the text.

### Technical Accents
- **Terminal Motif:** Navigation links should be prefixed with a `> ` character (e.g., `> projects`).
- **Scroll Progress:** A vertical teal line on the far right of the screen that grows as the user scrolls.
- **Grids:** A faint grid pattern background that is pinned to the viewport.