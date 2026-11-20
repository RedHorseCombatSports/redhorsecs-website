import Link from "next/link"

import { cta, site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { HeroBg } from "@/components/site/hero-bg"

/** Page-end band, shared by every page except the free-class flow. */
export function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden border-t">
      <HeroBg />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/82" />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-24 text-center">
        <h2 className="text-5xl leading-none font-bold tracking-[0.02em] sm:text-[64px]">
          Your first class <span className="text-brand">is on us</span>
        </h2>
        <p className="text-lg text-muted-foreground">No experience needed. No commitment. Gear to borrow.</p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="h-12 px-6 font-heading text-[15px] font-bold tracking-[0.04em] uppercase">
            <Link href="/free-class/">{cta.primary}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-border bg-card px-6 font-heading text-[15px] font-bold tracking-[0.04em] uppercase hover:bg-secondary"
          >
            <a href={site.phoneHref}>{cta.call}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
