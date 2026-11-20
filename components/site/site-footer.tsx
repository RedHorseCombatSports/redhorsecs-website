import Image from "next/image"
import Link from "next/link"
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { cta, footerNav, site } from "@/lib/site"
import { Button } from "@/components/ui/button"

function FacebookIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

/** The one place all contact details live together (NAP block + hours), on every page. */
export function SiteFooter() {
  return (
    <footer className="border-t bg-card/40 pb-20 sm:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" aria-label={`${site.name} home`} className="w-fit">
            <Image src="/images/logo-nav.png" alt="Red Horse Combat Sports logo" width={80} height={56} className="h-14 w-auto" />
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            {site.descriptor}. Your first class is free.
          </p>
          <Button asChild className="w-fit font-heading tracking-wide uppercase">
            <Link href="/free-class/">{cta.primary}</Link>
          </Button>
          <div className="flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Red Horse Combat Sports on Instagram"
              className="text-muted-foreground hover:text-foreground"
            >
              <InstagramIcon className="size-6" />
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Red Horse Combat Sports on Facebook"
              className="text-muted-foreground hover:text-foreground"
            >
              <FacebookIcon className="size-6" />
            </a>
          </div>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          <h2 className="mb-1 font-heading text-sm font-semibold tracking-wider text-brand uppercase">Explore</h2>
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="w-fit text-sm text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <address className="flex flex-col gap-3 text-sm not-italic">
          <h2 className="mb-1 font-heading text-sm font-semibold tracking-wider text-brand uppercase">Visit</h2>
          <p className="font-semibold">{site.name}</p>
          <a href={site.mapsLink} target="_blank" rel="noreferrer" className="flex gap-2 text-muted-foreground hover:text-foreground">
            <MapPinIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </span>
          </a>
          <a href={site.phoneHref} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <PhoneIcon className="size-4" aria-hidden="true" /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <MailIcon className="size-4" aria-hidden="true" /> {site.email}
          </a>
          <p className="flex gap-2 text-muted-foreground">
            <ClockIcon className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> Classes {site.hours}
          </p>
        </address>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
