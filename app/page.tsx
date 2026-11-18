import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  DumbbellIcon,
  FlameIcon,
  MapPinIcon,
  MedalIcon,
  ShieldIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react"

import { difference, faqs, gallery, offerings, site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Marquee } from "@/components/magicui/marquee"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { BorderBeam } from "@/components/magicui/border-beam"
import RotatingText from "@/components/react-bits/RotatingText"
import SpotlightCard from "@/components/react-bits/SpotlightCard"
import { SectionHeading } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"

const differenceIcons = [MedalIcon, UsersIcon, FlameIcon, TrophyIcon]
const offeringIcons = [UsersIcon, DumbbellIcon, ZapIcon, ShieldIcon]

const ticker = [
  "Oklahoma City’s top kickboxing gym",
  "First week free",
  "Ego-free environment",
  "World-class coaching",
  "All levels welcome",
  "Intimate class sizes",
]

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          className="-z-20 object-cover object-right opacity-90"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-background to-transparent" />

        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-6">
            <p className="w-fit rounded-(--radius-tag) border border-brand/40 bg-brand/10 px-3 py-1 font-heading text-sm font-semibold tracking-[0.2em] text-brand uppercase">
              Oklahoma City · Kickboxing
            </p>
            <h1 className="sr-only">{site.tagline}</h1>
            <div
              aria-hidden="true"
              className="flex flex-col items-start gap-2 font-heading text-6xl leading-[0.9] font-extrabold tracking-tight uppercase sm:text-8xl"
            >
              <span>Unleash your</span>
              <RotatingText
                texts={["potential", "power", "speed", "strength", "fighter"]}
                effect="slide"
                direction="up"
                rotationInterval={2200}
                staggerDuration={0.025}
                staggerFrom="last"
                mainClassName="overflow-hidden rounded-(--radius-button) bg-primary px-3 pt-1 pb-2 text-primary-foreground sm:px-4"
                splitLevelClassName="overflow-hidden pb-1"
              />
            </div>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">{site.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/hit-us-up">
                <ShimmerButton
                  background="var(--primary)"
                  shimmerColor="#ffffff"
                  borderRadius="var(--radius-button)"
                  className="h-12 px-7 font-heading text-base font-semibold tracking-wide uppercase"
                >
                  Claim your free week
                </ShimmerButton>
              </Link>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 font-heading text-base tracking-wide uppercase">
                <Link href="/location">
                  <MapPinIcon /> Find the gym
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden justify-center lg:flex">
            <Image
              src="/images/logo.png"
              alt={`${site.name} logo`}
              width={520}
              height={398}
              priority
              className="h-auto w-full max-w-md drop-shadow-[0_0_40px_rgb(237_45_45/0.35)]"
            />
          </div>
        </div>
      </section>

      {/* ---------- Ticker ---------- */}
      <div className="border-y bg-primary text-primary-foreground">
        <Marquee className="py-3 [--duration:35s] [--gap:2.5rem]">
          {ticker.map((t) => (
            <span key={t} className="flex items-center gap-10 font-heading text-lg font-semibold tracking-wider uppercase">
              {t} <span aria-hidden="true">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ---------- Intro ---------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="Oklahoma City’s top kickboxing gym"
            title="Elite training in a supportive, ego-free space"
            description="Whether you’re here to get fit, find a new passion, or grow stronger, our team-driven method delivers real results—physically and mentally."
          />
          <Button asChild variant="link" className="w-fit px-0 font-heading text-base tracking-wide text-brand uppercase">
            <Link href="/why-red-horse">
              Why train with Red Horse <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <div className="relative overflow-hidden rounded-(--radius-card) border">
          <Image
            src="/images/why-1.jpg"
            alt="Members working the heavy bags during a Red Horse class"
            width={726}
            height={480}
            className="h-auto w-full"
          />
          <BorderBeam size={180} duration={10} colorFrom="#ed2d2d" colorTo="#ff8a8a" />
        </div>
      </section>

      {/* ---------- The Red Horse difference ---------- */}
      <section className="border-y bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24">
          <SectionHeading eyebrow="The Red Horse difference" title="Built for real progress" align="center" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {difference.map((d, i) => {
              const Icon = differenceIcons[i]
              return (
                <SpotlightCard
                  key={d.title}
                  spotlightColor="rgba(237, 45, 45, 0.25)"
                  className="flex flex-col gap-3 rounded-(--radius-card) border bg-card p-6"
                >
                  <Icon className="size-8 text-brand" aria-hidden="true" />
                  <h3 className="text-2xl font-bold">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.description}</p>
                </SpotlightCard>
              )
            })}
          </div>
          <p className="text-center font-heading text-2xl font-semibold tracking-wide uppercase">
            The first week of class is <span className="text-brand">free</span>
          </p>
        </div>
      </section>

      {/* ---------- What we offer ---------- */}
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24">
        <SectionHeading
          eyebrow="What we offer"
          title="Training for every goal"
          description="Getting back into shape, looking for a new hobby, or discovering your true potential—there’s a place for you here."
        />
        <div className="grid gap-px overflow-hidden rounded-(--radius-card) border bg-border sm:grid-cols-2">
          {offerings.map((o, i) => {
            const Icon = offeringIcons[i]
            return (
              <div key={o.title} className="flex gap-4 bg-background p-8">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-(--radius-button) bg-brand/10 text-brand">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">{o.title}</h3>
                  <p className="text-muted-foreground">{o.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------- In action ---------- */}
      <section className="border-y bg-card/40 py-24">
        <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-end justify-between gap-6 px-4">
          <SectionHeading eyebrow="In action" title="We don’t mess around" description="Real fighters. Real moments. Red Horse in motion." />
          <Button asChild variant="outline" size="lg" className="font-heading tracking-wide uppercase">
            <Link href="/in-action">
              See the gallery <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:60s]">
            {gallery.slice(0, 12).map((g) => (
              <Image
                key={g.src}
                src={g.src}
                alt={g.alt}
                width={400}
                height={240}
                className="h-48 w-80 rounded-(--radius-card) border object-cover sm:h-56 sm:w-96"
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background sm:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background sm:w-40" />
        </div>
      </section>

      {/* ---------- FAQ teaser ---------- */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-24 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="FAQ" title="You got questions?" description="We got answers. Here are the ones we hear most." />
          <Button asChild variant="link" className="w-fit px-0 font-heading text-base tracking-wide text-brand uppercase">
            <Link href="/faq">
              All questions <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.slice(0, 4).map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CallToAction />
    </>
  )
}
