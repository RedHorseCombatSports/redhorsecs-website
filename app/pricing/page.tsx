import type { Metadata } from "next"
import Link from "next/link"
import { CheckIcon } from "lucide-react"

import { cta, pricing, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"

export const metadata: Metadata = {
  title: "Kickboxing Membership Prices",
  description: `Kickboxing at Red Horse Combat Sports in Oklahoma City: $${pricing.monthly} a month or $${pricing.dropIn} a class, plus private training. First class free.`,
  alternates: { canonical: "/pricing/" },
}

const plans = [
  {
    name: "First class",
    price: "Free",
    unit: "",
    points: ["No experience needed", "Loaner gloves and shinguards", "No commitment"],
    href: "/free-class/",
    label: cta.primary,
    featured: false,
  },
  {
    name: "Membership",
    price: `$${pricing.monthly}`,
    unit: "/ month",
    points: ["Best value at 2+ classes a week", "Billed monthly", "Coached every round"],
    href: "/free-class/",
    label: "Start with a free class",
    featured: true,
  },
  {
    name: "Drop-in",
    price: `$${pricing.dropIn}`,
    unit: "/ class",
    points: ["Pay as you go", "Any class on the schedule", "Good for busy weeks"],
    href: "/free-class/",
    label: "Start with a free class",
    featured: false,
  },
]

export default function PricingPage() {
  const twiceAWeek = pricing.dropIn * 2 * 4
  return (
    <>
      <PageHero
        title="Memberships and pricing"
        subtitle={`Your first class is free. After that, drop in for $${pricing.dropIn} a class or join for $${pricing.monthly} a month.`}
      />
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={cn(
                "flex flex-col gap-6 rounded-(--radius-card) border bg-card p-8 shadow-(--shadow-card)",
                p.featured && "border-brand ring-1 ring-brand"
              )}
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-heading text-xl font-semibold tracking-wide uppercase">{p.name}</h2>
                <p className="flex items-baseline gap-2">
                  <span className="font-heading text-6xl font-extrabold">{p.price}</span>
                  {p.unit && <span className="text-muted-foreground">{p.unit}</span>}
                </p>
              </div>
              <ul className="flex flex-1 flex-col gap-3">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant={p.featured || p.price === "Free" ? "default" : "outline"}
                className="h-12 font-heading text-base tracking-wide uppercase"
              >
                <Link href={p.href}>{p.label}</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="max-w-3xl text-lg text-muted-foreground">
          Training twice a week at drop-in rates runs about ${twiceAWeek} a month, so the membership pays for itself
          fast. Want private training? Call{" "}
          <a href={site.phoneHref} className="font-medium text-brand underline-offset-4 hover:underline">
            {site.phone}
          </a>{" "}
          and we’ll set it up.
        </p>
      </section>
      <CallToAction />
    </>
  )
}
