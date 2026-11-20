import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import { CheckCircle2Icon, NavigationIcon, PhoneIcon } from "lucide-react"

import { cta, site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { PickedDay } from "./picked-day"

export const metadata: Metadata = {
  title: "You’re in",
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start gap-6 px-4 py-24">
      <CheckCircle2Icon className="size-14 text-brand" aria-hidden="true" />
      <h1 className="text-5xl leading-none font-bold sm:text-6xl">
        You’re in.{" "}
        <Suspense fallback="See you soon.">
          <PickedDay />
        </Suspense>
      </h1>
      <p className="text-lg text-muted-foreground">
        Your coach will text or email you today to confirm. Here’s what to know before you come:{" "}
        <Link href="/free-class/#first-class" className="font-medium text-brand underline-offset-4 hover:underline">
          your first class
        </Link>
        . Questions? Call{" "}
        <a href={site.phoneHref} className="font-medium text-brand underline-offset-4 hover:underline">
          {site.phone}
        </a>
        .
      </p>
      <p className="text-muted-foreground">{site.address.full}</p>
      <div className="flex flex-wrap gap-3">
        <Button asChild size="lg" className="h-12 font-heading text-base tracking-wide uppercase">
          <a href={site.mapsLink} target="_blank" rel="noreferrer">
            <NavigationIcon /> {cta.directions}
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-12 font-heading text-base tracking-wide uppercase">
          <a href={site.phoneHref}>
            <PhoneIcon /> {cta.call}
          </a>
        </Button>
      </div>
    </section>
  )
}
