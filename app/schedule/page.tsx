import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDaysIcon, PhoneIcon } from "lucide-react"

import { cta, site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"
import { ScheduleTable } from "@/components/site/schedule-table"

export const metadata: Metadata = {
  title: "Kickboxing Class Schedule, OKC",
  description:
    "Weekly kickboxing classes at Red Horse Combat Sports in Oklahoma City: youth, beginner, advanced, conditioning and open training. First class free.",
  alternates: { canonical: "/schedule/" },
}

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Kickboxing class schedule"
        subtitle="Youth, beginner, advanced and conditioning classes Monday to Friday, plus open training on Saturday. We recommend 2–3 classes a week to start."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-24 lg:grid-cols-[1.5fr_1fr]">
        <div className="flex flex-col gap-6 rounded-(--radius-card) border bg-card p-6 shadow-(--shadow-card) sm:p-8">
          <div className="flex items-center gap-3">
            <CalendarDaysIcon className="size-8 text-brand" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Weekly classes</h2>
          </div>
          <ScheduleTable />
        </div>

        <div className="flex flex-col gap-4 rounded-(--radius-card) border bg-card p-6 shadow-(--shadow-card) sm:p-8 lg:self-start">
          <h2 className="text-3xl font-bold">
            Your first class is <span className="text-brand">free</span>
          </h2>
          <p className="text-muted-foreground">
            No experience needed. Pick a class, tell us you’re coming, and borrow our gloves and shinguards if you
            don’t have your own.
          </p>
          <div className="mt-2 flex flex-col gap-3">
            <Button asChild size="lg" className="h-12 font-heading text-base tracking-wide uppercase">
              <Link href="/free-class/">{cta.primary}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 font-heading text-base tracking-wide uppercase">
              <a href={site.phoneHref}>
                <PhoneIcon /> {cta.call}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
