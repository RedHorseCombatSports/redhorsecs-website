import type { Metadata } from "next"
import { MailIcon, MapPinIcon, NavigationIcon, PhoneIcon } from "lucide-react"

import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"

export const metadata: Metadata = {
  title: "Find Us",
  description: `Red Horse Combat Training is at ${site.address.full}. Call ${site.phone} or email ${site.email}.`,
}

export default function LocationPage() {
  return (
    <>
      <PageHero eyebrow="Find us" title="Where to find us" subtitle="Have questions or want to stop by?" />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20 lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col gap-6 rounded-(--radius-card) border bg-card p-8 shadow-(--shadow-card)">
          <h2 className="text-3xl font-bold">{site.name}</h2>
          <ul className="flex flex-col gap-4 text-lg">
            <li className="flex gap-3">
              <MapPinIcon className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postal}
              </span>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-brand">
                <PhoneIcon className="size-5 text-brand" aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-brand">
                <MailIcon className="size-5 shrink-0 text-brand" aria-hidden="true" /> {site.email}
              </a>
            </li>
          </ul>
          <Button asChild size="lg" className="mt-auto font-heading tracking-wide uppercase">
            <a href={site.mapsLink} target="_blank" rel="noreferrer">
              <NavigationIcon /> Get directions
            </a>
          </Button>
        </div>
        <div className="min-h-80 overflow-hidden rounded-(--radius-card) border">
          <iframe
            title={`Map to ${site.name}`}
            src={site.mapsEmbed}
            className="h-full min-h-80 w-full grayscale invert-[0.92] hue-rotate-180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <CallToAction />
    </>
  )
}
