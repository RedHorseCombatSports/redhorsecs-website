import Image from "next/image"
import Link from "next/link"

import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"

/** Closing "first class free" band, shared by every page. */
export function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden border-t">
      <Image src="/images/hero-bg.jpg" alt="" fill className="-z-20 object-cover opacity-60" />
      <div className="absolute inset-0 -z-10 bg-background/70" />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-24 text-center">
        <h2 className="text-5xl leading-none font-extrabold sm:text-7xl">
          Your first move <span className="text-brand">starts here</span>
        </h2>
        <p className="max-w-xl text-lg text-muted-foreground">
          No experience needed. Your first class is on us.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="h-12 px-7 font-heading text-base tracking-wide uppercase">
            <Link href="/hit-us-up">Book your free class</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-6 font-heading text-base tracking-wide uppercase">
            <a href={site.phoneHref}>Call {site.phone}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
