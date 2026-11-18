@AGENTS.md

# Red Horse Combat Training website

Redesign of redhorsecs.com (currently WordPress + Elementor on GoDaddy), built from the
Component Bank (`../component-bank`). Static Next.js export deployed to Netlify.

Stack: Next.js (App Router, `output: "export"`) · Tailwind CSS v4 · shadcn/ui on Radix ·
Magic UI · React Bits · Launch UI · Animate UI · Base UI (all copied in from the bank).

## Brand

From the current site: red `#ED2D2D` (accent/glow), `#DC2626` for button fills (AA contrast
with white), near-black `#0E0E10` / `#1B1C21`, white. **Dark-only** site (`<html class="dark">`).
Headings: **Roboto Condensed**, uppercase (`font-heading`). Body: **Inter**.
All values live in `styles/tokens.css`. Never hard-code colors in components.

## Where things live

- `lib/site.ts` — **all content**: business info, nav, offerings, FAQs, gallery list. Edit text here.
- `app/<route>/page.tsx` — pages. URLs match the old site (`/why-red-horse`, `/coachs-corner`,
  `/in-action`, `/faq`, `/location`, `/hit-us-up`) so links and search rankings carry over.
- `components/site/` — site-specific pieces (header, footer, page hero, CTA band, gallery, contact form).
- `public/images/` — logo, hero, photos (compressed JPEGs from the old site).
- `public/__forms.html` — hidden Netlify Forms skeleton. **Field names must match
  `components/site/contact-form.tsx` exactly.**

## Launch checklist (not done yet)

- [ ] Remove `robots: { index: false }` in `app/layout.tsx` and the `X-Robots-Tag` header in `netlify.toml`.
- [ ] Netlify: add a form notification email (must be a Netlify team member).
- [ ] Point redhorsecs.com DNS at Netlify: change only the `@` A record and `www` CNAME at GoDaddy.
      Do NOT change nameservers — Microsoft 365 email depends on GoDaddy's DNS records.

## Commands

- `npm run dev`
- `npm run typecheck`
- `npm run build` → static site in `out/`
