import type { Metadata } from "next"
import Link from "next/link"

import { faqs } from "@/lib/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about kickboxing at Red Horse: experience, gear, sparring, youth classes, how often to train and pricing.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently asked questions" subtitle="You got questions? We got answers." />
      <section className="mx-auto max-w-3xl px-4 py-20">
        <Accordion type="single" collapsible defaultValue="q0" className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="py-5 text-left text-lg">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-10 text-muted-foreground">
          Still have a question?{" "}
          <Link href="/hit-us-up" className="font-medium text-brand underline-offset-4 hover:underline">
            Hit us up
          </Link>
          .
        </p>
      </section>
      <CallToAction />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
