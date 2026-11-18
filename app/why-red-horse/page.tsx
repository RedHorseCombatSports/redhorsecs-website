import type { Metadata } from "next"
import Image from "next/image"
import { CheckIcon } from "lucide-react"

import { difference, learnings, offerings } from "@/lib/site"
import { PageHero, SectionHeading } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"
import BlurFadeIn from "@/components/site/fade-in"

export const metadata: Metadata = {
  title: "Why Red Horse",
  description:
    "Why train with Red Horse: Oklahoma’s only kickboxing-focused gym, intimate classes, superior conditioning and world-class coaching. First week free.",
}

export default function WhyPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Red Horse"
        title="Why train with Red Horse?"
        subtitle="Whether you’re getting back into shape, looking for a new hobby, or discovering your true potential, our focus is on steady, real-world progress. Using our iron-clad method of improvement, which emphasizes mutual assistance through collaborative effort, our students leave classes stronger, both physically and mentally."
      />

      <section className="mx-auto flex max-w-6xl flex-col gap-24 px-4 py-24">
        {/* What we offer */}
        <BlurFadeIn className="grid items-center gap-12 lg:grid-cols-2">
          <Image
            src="/images/why-3.jpg"
            alt="Red Horse members training together"
            width={726}
            height={480}
            className="h-auto w-full rounded-(--radius-card) border"
          />
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Programs" title="What we offer" />
            <ul className="flex flex-col gap-4">
              {offerings.map((o) => (
                <li key={o.title} className="flex flex-col gap-1 border-l-2 border-brand pl-4">
                  <span className="font-heading text-xl font-bold uppercase">{o.title}</span>
                  <span className="text-muted-foreground">{o.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </BlurFadeIn>

        {/* What you'll learn */}
        <BlurFadeIn className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6 lg:order-1">
            <SectionHeading eyebrow="Skills" title="What you’ll learn" />
            <ul className="flex flex-col gap-3">
              {learnings.map((l) => (
                <li key={l} className="flex gap-3 text-lg">
                  <CheckIcon className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/why-1.jpg"
            alt="Members working heavy bags in class"
            width={726}
            height={480}
            className="h-auto w-full rounded-(--radius-card) border lg:order-2"
          />
        </BlurFadeIn>

        {/* The Red Horse difference */}
        <BlurFadeIn className="grid items-center gap-12 lg:grid-cols-2">
          <Image
            src="/images/why-2.jpg"
            alt="Coach working with a Red Horse student"
            width={726}
            height={480}
            className="h-auto w-full rounded-(--radius-card) border"
          />
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Our edge" title="The Red Horse difference" />
            <div className="grid gap-3 sm:grid-cols-2">
              {difference.map((d) => (
                <div key={d.title} className="rounded-(--radius-card) border bg-card p-5 shadow-(--shadow-card)">
                  <p className="font-heading text-lg font-bold text-brand uppercase">{d.title}</p>
                  <p className="text-sm text-muted-foreground">{d.description}</p>
                </div>
              ))}
            </div>
            <p className="font-heading text-xl font-semibold uppercase">
              The first week of class is <span className="text-brand">free!</span>
            </p>
          </div>
        </BlurFadeIn>
      </section>

      <CallToAction />
    </>
  )
}
