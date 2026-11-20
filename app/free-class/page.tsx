import type { Metadata } from "next"
import Image from "next/image"
import { CheckIcon, PhoneIcon } from "lucide-react"

import { site } from "@/lib/site"
import { PageHero } from "@/components/site/page-hero"
import { FreeClassForm } from "@/components/site/free-class-form"

export const metadata: Metadata = {
  title: "Your First Kickboxing Class Free",
  description:
    "New to kickboxing? Your first class at Red Horse Combat Sports in Oklahoma City is free. Loaner gloves, beginner-friendly coaching, no pressure.",
  alternates: { canonical: "/free-class/" },
}

const howItWorks = [
  "Your first class is free. No commitment.",
  "No experience needed. Your coach walks you through every move.",
  "Youth: a parent signs the waiver.",
]

/** "Your first class" answers. Linked from the thank-you page as #first-class. */
const firstClass = [
  { q: "What do I wear?", a: "Athletic clothes you can move in." },
  { q: "What do I bring?", a: "Water and a towel." },
  { q: "Do I need gloves?", a: "No. Loaner gloves and shinguards are ready for you." },
  { q: "Do I have to spar?", a: "Sparring stays low-speed and controlled, so you learn technique without getting rattled." },
  { q: "When should I arrive?", a: "10 minutes early to sign the waiver and meet your coach." },
]

export default function FreeClassPage() {
  return (
    <>
      <PageHero
        title="Your first class is free. Here’s what to expect."
        subtitle="Book below, or just call. We’ll get you on the mat."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-bold">How the free class works</h2>
            <ul className="flex flex-col gap-3 text-lg">
              {howItWorks.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckIcon className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex gap-3">
                <CheckIcon className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  Book online here, or call{" "}
                  <a href={site.phoneHref} className="font-medium text-brand underline-offset-4 hover:underline">
                    {site.phone}
                  </a>
                  .
                </span>
              </li>
            </ul>
          </div>

          <div id="first-class" className="flex scroll-mt-24 flex-col gap-5">
            <h2 className="text-4xl font-bold">Your first class</h2>
            <dl className="divide-y rounded-(--radius-card) border bg-card">
              {firstClass.map((f) => (
                <div key={f.q} className="grid gap-1 p-5 sm:grid-cols-[11rem_1fr] sm:gap-4">
                  <dt className="font-heading text-lg font-semibold uppercase">{f.q}</dt>
                  <dd className="text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Image
            src="/images/contact.jpg"
            alt="Two members sparring with gloves and shinguards at Red Horse Combat Sports, Oklahoma City"
            width={900}
            height={1259}
            className="hidden h-auto w-full max-w-md rounded-(--radius-card) border lg:block"
          />
        </div>

        <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start">
          <FreeClassForm />
          <a
            href={site.phoneHref}
            className="flex min-h-11 items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <PhoneIcon className="size-4 text-brand" aria-hidden="true" /> Rather talk? Call {site.phone}
          </a>
        </div>
      </section>
    </>
  )
}
