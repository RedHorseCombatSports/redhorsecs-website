import type { Metadata } from "next"
import Link from "next/link"

import { faqs, site } from "@/lib/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PageHero } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"

export const metadata: Metadata = {
  title: "Beginner Kickboxing FAQ",
  description:
    "No experience needed. What to bring, sparring, youth classes and memberships at Red Horse Combat Sports, Oklahoma City. First class free.",
  alternates: { canonical: "/faq/" },
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
      <PageHero title="Kickboxing questions, answered" subtitle="You got questions? We got answers." />
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
          Call{" "}
          <a href={site.phoneHref} className="font-medium text-brand underline-offset-4 hover:underline">
            {site.phone}
          </a>{" "}
          or{" "}
          <Link href="/free-class/" className="font-medium text-brand underline-offset-4 hover:underline">
            book your free class
          </Link>{" "}
          and ask your coach.
        </p>
      </section>
      <CallToAction />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
