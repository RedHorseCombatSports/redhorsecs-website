import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  FlameIcon,
  MapPinIcon,
  MedalIcon,
  ShieldIcon,
  SwordsIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react"

import { cta, difference, gallery, offerings, site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/magicui/marquee"
import RotatingText from "@/components/react-bits/RotatingText"
import { SectionHeading } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"
import { HeroBg } from "@/components/site/hero-bg"

export const metadata: Metadata = {
  title: { absolute: "Kickboxing Gym in Oklahoma City | Red Horse Combat Sports" },
  description: site.description,
  alternates: { canonical: "/" },
}

const differenceIcons = [MedalIcon, UsersIcon, FlameIcon, TrophyIcon]
const offeringIcons = [UsersIcon, SwordsIcon, ZapIcon, ShieldIcon]

const ticker = [
  "Kickboxing in Oklahoma City",
  "First class free",
  "No experience needed",
  "Ego-free environment",
  "World-class coaching",
  "All levels welcome",
  "Intimate class sizes",
]

const buttonText = "font-heading text-[15px] font-bold tracking-[0.04em] uppercase"

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate overflow-hidden">
        <HeroBg priority className="object-center" />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-background/92 via-background/55 to-background/25"
        />

        <div className="mx-auto flex min-h-[calc(100svh-14rem)] max-w-6xl flex-wrap items-center justify-between gap-12 px-4 py-16 sm:py-24">
          <div className="flex min-w-0 max-w-xl flex-[1_1_420px] flex-col gap-6">
            <h1 className="sr-only">Unleash your potential: kickboxing in Oklahoma City. Your first class is free.</h1>
            <div
              aria-hidden="true"
              className="flex flex-col items-start font-heading text-5xl leading-[1.02] font-bold tracking-[0.01em] uppercase min-[400px]:text-[56px] sm:text-[80px]"
            >
              <span>Unleash your</span>
              <RotatingText
                texts={["potential", "power", "speed", "strength", "fighter"]}
                effect="slide"
                direction="up"
                rotationInterval={2200}
                staggerDuration={0.025}
                staggerFrom="last"
                mainClassName="mt-2 overflow-hidden bg-primary px-3.5 text-primary-foreground"
                splitLevelClassName="overflow-hidden pb-1"
              />
            </div>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Combat sports and kickboxing in Oklahoma City. Beginner-friendly classes. No experience needed.{" "}
              <strong className="font-semibold text-foreground">Your first class is free.</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className={`h-12 px-6 ${buttonText}`}>
                <Link href="/free-class/">{cta.hero}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className={`h-12 border-border bg-card px-5 hover:bg-secondary ${buttonText}`}
              >
                <Link href="/location/">
                  <MapPinIcon /> Find the gym
                </Link>
              </Button>
            </div>
          </div>
          <Image
            src="/images/logo-combat-sports-white.svg"
            alt="Red Horse Combat Sports logo"
            width={460}
            height={320}
            priority
            className="hidden h-auto w-full max-w-[460px] flex-[0_1_460px] lg:block"
          />
        </div>
      </section>

      {/* ---------- Ticker ---------- */}
      <div className="bg-primary text-primary-foreground">
        <Marquee className="py-4 [--duration:40s] [--gap:2.25rem]">
          {ticker.map((t) => (
            <span
              key={t}
              className="flex items-center gap-9 font-heading text-base font-bold tracking-[0.06em] whitespace-nowrap uppercase"
            >
              {t} <span aria-hidden="true">✦</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ---------- Beginners ---------- */}
      <section className="border-b">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-4 py-24">
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
            <h2 className="text-4xl leading-none font-bold sm:text-5xl">Never thrown a punch? Perfect.</h2>
            <p className="text-lg text-muted-foreground">
              Most of our members walked in as beginners. Our coaches teach you every move from the ground up, and
              sparring stays low-speed so you learn technique without getting rattled. Bring water and workout clothes. If
              you don’t have gloves or shinguards yet, borrow ours.
            </p>
            <Link
              href="/why-red-horse/"
              className="inline-flex min-h-11 w-fit items-center gap-1.5 font-heading text-sm font-bold tracking-[0.04em] text-brand uppercase hover:text-destructive"
            >
              Why train with Red Horse <ArrowRightIcon className="size-3.5" />
            </Link>
          </div>
          <Image
            src="/images/why-1.jpg"
            alt="Beginner kickboxing class working heavy bags at Red Horse Combat Sports, Oklahoma City"
            width={726}
            height={480}
            className="h-auto w-full min-w-0 flex-[1_1_420px] rounded-(--radius-card) border object-cover"
          />
        </div>
      </section>

      {/* ---------- Built for real progress ---------- */}
      <section className="border-b bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-24">
          <h2 className="text-center text-4xl leading-none font-bold sm:text-5xl">Built for real progress</h2>
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {difference.map((d, i) => {
              const Icon = differenceIcons[i]
              return (
                <div key={d.title} className="flex min-h-40 flex-col gap-3 rounded-(--radius-card) border bg-card p-8">
                  <Icon className="size-6 text-brand" aria-hidden="true" />
                  <h3 className="text-2xl leading-8 font-bold">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.description}</p>
                </div>
              )
            })}
          </div>
          <p className="font-heading text-[22px] font-bold tracking-[0.03em] uppercase">
            Your first class is <span className="text-brand">on us</span>
          </p>
        </div>
      </section>

      {/* ---------- Training for every goal ---------- */}
      <section className="border-b">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24">
          <SectionHeading
            title="Training for every goal"
            description="Getting back into shape, looking for a new hobby, or discovering your true potential. There’s a place for you here."
          />
          <div className="grid gap-px overflow-hidden rounded-(--radius-card) border bg-border sm:grid-cols-2">
            {offerings.map((o, i) => {
              const Icon = offeringIcons[i]
              return (
                <div key={o.title} className="flex gap-4 bg-background p-8">
                  <span className="flex size-12 flex-none items-center justify-center rounded-(--radius-button) bg-brand/12 text-brand">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-xl font-bold">{o.title}</h3>
                    <p className="text-[15px] text-muted-foreground">{o.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- Gallery ---------- */}
      <section className="overflow-hidden py-24">
        <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-end justify-between gap-5 px-4">
          <SectionHeading title="We don’t mess around" description="Real fighters. Real moments. Red Horse in motion." />
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-11 border-border bg-card px-4 font-heading text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-secondary"
          >
            <Link href="/in-action/">
              See the gallery <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <Marquee pauseOnHover className="[--duration:70s] [--gap:1rem]">
          {gallery.slice(0, 12).map((g) => (
            <Image
              key={g.src}
              src={g.src}
              alt={g.alt}
              width={382}
              height={222}
              className="h-[222px] w-[382px] rounded-(--radius-card) border object-cover"
            />
          ))}
        </Marquee>
      </section>

      <CallToAction />
    </>
  )
}
