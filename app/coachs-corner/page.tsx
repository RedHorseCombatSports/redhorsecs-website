import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDaysIcon, ClockIcon, PhoneIcon } from "lucide-react"

import { schedule, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Red Horse Combat Training class schedule: Monday to Thursday 4 to 6 PM, Saturday 10 to 11 AM. Your first class is free.",
}

export default function SchedulePage() {
  return (
    <>
      <PageHero
        title="Stay sharp, ready, and in the loop"
        subtitle="Welcome to Coach’s Corner, your home base for everything happening at Red Horse."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-24 lg:grid-cols-[1.5fr_1fr]">
        {/* shadcn/ui Table */}
        <div className="flex flex-col gap-6 rounded-(--radius-card) border bg-card p-6 shadow-(--shadow-card) sm:p-8">
          <div className="flex items-center gap-3">
            <CalendarDaysIcon className="size-8 text-brand" aria-hidden="true" />
            <h2 className="text-3xl font-bold">Class schedule</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="font-heading tracking-wider uppercase">Day</TableHead>
                <TableHead className="text-right font-heading tracking-wider uppercase">Class time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schedule.map(({ day, time }) => (
                <TableRow key={day} className={cn(!time && "text-muted-foreground")}>
                  <TableCell className="py-4 font-heading text-lg font-semibold tracking-wide uppercase">
                    {day}
                  </TableCell>
                  <TableCell className="py-4 text-right text-base">
                    {time ? (
                      <span className="inline-flex items-center gap-2 font-medium">
                        <ClockIcon className="size-4 text-brand" aria-hidden="true" /> {time}
                      </span>
                    ) : (
                      "No class"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex flex-col gap-4 rounded-(--radius-card) border bg-card p-6 shadow-(--shadow-card) sm:p-8 lg:self-start">
          <h2 className="text-3xl font-bold">
            Book your <span className="text-brand">first class</span>
          </h2>
          <p className="text-muted-foreground">
            Your first class is free. No experience needed. Pick a time that works, let us know you’re
            coming, and we’ll take it from there.
          </p>
          <div className="mt-2 flex flex-col gap-3">
            <Button asChild size="lg" className="h-12 font-heading text-base tracking-wide uppercase">
              <Link href="/hit-us-up">Book your first class</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 font-heading text-base tracking-wide uppercase">
              <a href={site.phoneHref}>
                <PhoneIcon /> {site.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
