import type { Metadata } from "next"
import Image from "next/image"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { site } from "@/lib/site"
import { PageHero } from "@/components/site/page-hero"
import { ContactForm } from "@/components/site/contact-form"

export const metadata: Metadata = {
  title: "Hit Us Up",
  description: "Contact Red Horse Combat Training. Drop us a line and we’ll get back to you fast. Your first week is free.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Hit us up" title="Your first move starts here" subtitle="Drop us a line and we’ll get back to you fast." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col gap-6">
          <Image
            src="/images/contact.jpg"
            alt="Two Red Horse members sparring with gloves and shin guards"
            width={900}
            height={1259}
            className="hidden h-auto w-full rounded-(--radius-card) border lg:block"
          />
          <ul className="flex flex-col gap-3 text-muted-foreground">
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 hover:text-foreground">
                <PhoneIcon className="size-5 text-brand" aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-foreground">
                <MailIcon className="size-5 text-brand" aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPinIcon className="size-5 shrink-0 text-brand" aria-hidden="true" /> {site.address.full}
            </li>
          </ul>
        </div>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
