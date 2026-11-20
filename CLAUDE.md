@AGENTS.md

# Red Horse Combat Sports website

Replacement for redhorsecs.com (WordPress is being retired), built from the
Component Bank (`../component-bank`). Static Next.js export deployed to Netlify.

Stack: Next.js (App Router, `output: "export"`) · Tailwind CSS v4 · shadcn/ui on Radix ·
Magic UI · React Bits · Launch UI · Animate UI · Base UI (all copied in from the bank).

## Brand

From the current site: red `#ED2D2D` (accent/glow), `#DC2626` for button fills (AA contrast
with white), near-black `#0E0E10` / `#1B1C21`, white. **Dark-only** site (`<html class="dark">`).
Headings: **Roboto Condensed**, uppercase (`font-heading`). Body: **Inter**.
All values live in `styles/tokens.css`. Never hard-code colors in components.

## Copy rules (from the Website Copy, SEO & Brand Text Spec)

- One public name everywhere: **Red Horse Combat Sports** (legal name "Red Horse Combat Sports LLC" only in
  legal contexts). Never "Red Horse Kickboxing" / "Combat Training" / "RHCS". Later mentions: "Red Horse".
- Offer: **Your first class is free** (never "free week" / "free trial").
- CTAs come from `cta` in `lib/site.ts`: "Claim your free class" (primary, every page end), "Free class" (nav),
  "Book my free class" (form submit), "Call (405) 361-5815", "Get directions".
- Titles pair the name with "kickboxing"; one H1 per page; meta descriptions end on the offer.
- Nothing in [brackets] or unconfirmed (coach credentials, youth ages, "small classes", women's classes)
  goes live without Cody's OK. No invented testimonials.

## Where things live

- `lib/site.ts` — **all content**: business info, CTAs, prices, nav, FAQs, schedule, gallery list. Edit text here.
- `app/<route>/page.tsx` — pages: `/`, `/free-class/` (+ `/thanks/`), `/schedule/`, `/pricing/`, `/faq/`
  (footer only), `/location/` ("Visit"), `/why-red-horse/`, `/in-action/`. `trailingSlash: true`.
- `netlify.toml` — 301s from old WordPress URLs (`/coachs-corner/` → `/schedule/`, `/hit-us-up/` → `/free-class/`,
  Yoast sitemaps → `/sitemap.xml`).
- `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt` — SEO files. Schema is in `app/layout.tsx`.
- `components/site/` — header (with mobile sticky CTA bar), footer (NAP block + hours), page hero, CTA band,
  schedule table, gallery, free-class form.
- `public/images/` — `logo-mark.png` is the horse mark cropped from `logo.png` (whose wordmark still says
  "Red Horse Kickboxing"; don't use it until the logo decision is made).
- `public/__forms.html` — hidden Netlify Forms skeleton for the `free-class` form. **Field names must match
  `components/site/free-class-form.tsx` exactly.**

## Launch checklist (not done yet)

- [ ] Remove `robots: { index: false }` in `app/layout.tsx` and the `X-Robots-Tag` header in `netlify.toml`.
- [ ] Netlify: add a form notification email (must be a Netlify team member).
- [ ] Add `openingHoursSpecification` to the schema once hours match the Google Business Profile.
- [ ] Resubmit `https://redhorsecs.com/sitemap.xml` in Search Console after launch.
- [ ] Point redhorsecs.com DNS at Netlify: change only the `@` A record and `www` CNAME at GoDaddy.
      Do NOT change nameservers — Microsoft 365 email depends on GoDaddy's DNS records.

## Commands

- `npm run dev`
- `npm run typecheck`
- `npm run build` → static site in `out/`
