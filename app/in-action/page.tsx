import type { Metadata } from "next"

import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"
import { Gallery } from "@/components/site/gallery"

export const metadata: Metadata = {
  title: "In Action",
  description: "Real fighters. Real moments. Photos from Red Horse training and fights.",
}

export default function InActionPage() {
  return (
    <>
      <PageHero eyebrow="In action" title="We don’t mess around" subtitle="Real fighters. Real moments. Red Horse in motion." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Gallery />
      </section>
      <CallToAction />
    </>
  )
}
