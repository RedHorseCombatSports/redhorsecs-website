import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDaysIcon, MessageSquareIcon, PhoneIcon } from "lucide-react"

import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"

export const metadata: Metadata = {
  title: "Schedule",
  description: "Coach’s Corner: class schedule, events and news from Red Horse Combat Training.",
}

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Stay sharp, ready, and in the loop"
        subtitle="Welcome to Coach’s Corner, your home base for everything happening at Red Horse."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-24 lg:grid-cols-[1.5fr_1fr]">
        {/* TODO: replace with the real class timetable or a booking-app embed once Red Horse provides it. */}
        <div className="flex flex-col gap-4 rounded-(--radius-card) border bg-card p-8 shadow-(--shadow-card)">
          <CalendarDaysIcon className="size-10 text-brand" aria-hidden="true" />
          <h2 className="text-3xl font-bold">Class schedule</h2>
          <p className="text-muted-foreground">
            Our class times are updated regularly. Reach out and we’ll get you the current schedule and
            set up your free first week.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Button asChild size="lg" className="font-heading tracking-wide uppercase">
              <Link href="/hit-us-up">
                <MessageSquareIcon /> Ask for the schedule
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-heading tracking-wide uppercase">
              <a href={site.phoneHref}>
                <PhoneIcon /> {site.phone}
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-(--radius-card) border bg-card p-8 shadow-(--shadow-card)">
          <h2 className="text-3xl font-bold">Upcoming events</h2>
          <p className="text-muted-foreground">There are no upcoming events right now. Check back soon.</p>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-auto w-fit font-heading text-sm font-semibold tracking-wide text-brand uppercase hover:underline"
          >
            Follow us on Facebook for news →
          </a>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
