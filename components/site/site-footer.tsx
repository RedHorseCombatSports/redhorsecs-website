import Image from "next/image"
import Link from "next/link"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { nav, site } from "@/lib/site"

function FacebookIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Image src="/images/logo.png" alt={site.name} width={180} height={138} className="h-auto w-40" />
          <p className="max-w-xs text-sm text-muted-foreground">
            Oklahoma City’s only kickboxing-focused gym. Your first week is free.
          </p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <FacebookIcon className="size-5" /> Follow us on Facebook
          </a>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          <h2 className="mb-1 font-heading text-sm font-semibold tracking-wider text-brand uppercase">Explore</h2>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="w-fit text-sm text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <h2 className="mb-1 font-heading text-sm font-semibold tracking-wider text-brand uppercase">Visit</h2>
          <a href={site.mapsLink} target="_blank" rel="noreferrer" className="flex gap-2 text-muted-foreground hover:text-foreground">
            <MapPinIcon className="mt-0.5 size-4 shrink-0" />
            <span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </span>
          </a>
          <a href={site.phoneHref} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <PhoneIcon className="size-4" /> {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <MailIcon className="size-4" /> {site.email}
          </a>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
