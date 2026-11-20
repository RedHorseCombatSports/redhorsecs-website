import type { Metadata } from "next"

import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"
import { Gallery } from "@/components/site/gallery"

export const metadata: Metadata = {
  title: { absolute: "Photos & Videos | Red Horse Combat Sports, Oklahoma City" },
  description:
    "See what training at Red Horse Combat Sports looks like: classes, sparring and fights at our Oklahoma City kickboxing gym.",
  alternates: { canonical: "/in-action/" },
}

export default function InActionPage() {
  return (
    <>
      <PageHero title="We don’t mess around" subtitle="Real fighters. Real moments. Red Horse in motion." />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Gallery />
      </section>
      <CallToAction />
    </>
  )
}
