import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  DumbbellIcon,
  FlameIcon,
  MapPinIcon,
  NavigationIcon,
  PhoneIcon,
  SparklesIcon,
  StarIcon,
  TrophyIcon,
} from "lucide-react"

import { audiences, cta, gallery, pricing, site } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/magicui/marquee"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
import { BorderBeam } from "@/components/magicui/border-beam"
import SpotlightCard from "@/components/react-bits/SpotlightCard"
import { SectionHeading } from "@/components/site/page-hero"
import { CallToAction } from "@/components/site/call-to-action"
import { ScheduleTable } from "@/components/site/schedule-table"

export const metadata: Metadata = {
  title: { absolute: "Kickboxing Gym in Oklahoma City | Red Horse Combat Sports" },
  description: site.description,
  alternates: { canonical: "/" },
}

const audienceIcons = [SparklesIcon, FlameIcon, TrophyIcon, DumbbellIcon]

const ticker = [
  "First class free",
  "No experience needed",
  "Gear to borrow",
  "Kickboxing in Oklahoma City",
  "All levels welcome",
  "Zero ego",
]

const gets = [
  "A full-body workout that builds cardio, strength and flexibility",
  "Real kickboxing skills, coached every round",
  "A team that trains together and pushes each other, without the attitude",
]

/** Same primary button everywhere, so a visitor is never more than one tap from booking. */
function PrimaryCta({ className }: { className?: string }) {
  return (
    <Button asChild size="lg" className={`h-12 w-fit px-7 font-heading text-base tracking-wide uppercase ${className ?? ""}`}>
      <Link href="/free-class/">{cta.primary}</Link>
    </Button>
  )
}

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

        <div className="mx-auto grid min-h-[calc(100svh-14rem)] max-w-6xl items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col gap-6">
            <h1 className="flex flex-col items-start gap-3 font-heading text-5xl leading-[0.95] font-extrabold tracking-tight uppercase sm:text-7xl">
              <span>Kickboxing in Oklahoma City.</span>
              <span className="rounded-(--radius-button) bg-primary px-3 pt-1 pb-2 text-primary-foreground sm:px-4">
                Your first class is free.
              </span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
              Beginner-friendly classes and real coaching. No experience needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/free-class/">
                <ShimmerButton
                  background="var(--primary)"
                  shimmerColor="#ffffff"
                  borderRadius="var(--radius-button)"
                  className="h-12 px-7 font-heading text-base font-semibold tracking-wide uppercase"
                >
                  {cta.primary}
                </ShimmerButton>
              </Link>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 font-heading text-base tracking-wide uppercase">
                <a href={site.phoneHref}>
                  <PhoneIcon /> {cta.call}
                </a>
              </Button>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <MapPinIcon className="size-4 text-brand" aria-hidden="true" /> {site.address.street}
                <span aria-hidden="true">·</span>
                <ClockIcon className="size-4 text-brand" aria-hidden="true" /> {site.hours}
              </p>
              <p className="flex items-center gap-2">
                <StarIcon className="size-4 fill-brand text-brand" aria-hidden="true" /> 5.0 on Google ·{" "}
                <a href={site.reviews} target="_blank" rel="noreferrer" className="font-medium text-foreground underline-offset-4 hover:underline">
                  Read our reviews →
                </a>
              </p>
            </div>
          </div>
          <div className="hidden justify-center lg:flex">
            <Image
              src="/images/logo-mark.png"
              alt="Red Horse Combat Sports logo"
              width={570}
              height={338}
              priority
              className="h-auto w-full max-w-sm drop-shadow-[0_0_40px_rgb(237_45_45/0.35)]"
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

      {/* ---------- Never thrown a punch? ---------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading
            title="Never thrown a punch? Perfect."
            description="Most of our members walked in as beginners. Our coaches teach you every move from the ground up, and sparring stays low-speed so you learn technique without getting rattled. Bring water and workout clothes. If you don’t have gloves or shinguards yet, borrow ours."
          />
          <PrimaryCta />
        </div>
        <div className="relative overflow-hidden rounded-(--radius-card) border">
          <Image
            src="/images/why-1.jpg"
            alt="Beginner kickboxing class working heavy bags at Red Horse Combat Sports, Oklahoma City"
            width={726}
            height={480}
            className="h-auto w-full"
          />
          <BorderBeam size={180} duration={10} colorFrom="#ed2d2d" colorTo="#ff8a8a" />
        </div>
      </section>

      {/* ---------- Who it's for ---------- */}
      <section className="border-y bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24">
          <SectionHeading title="Who trains at Red Horse" align="center" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => {
              const Icon = audienceIcons[i]
              return (
                <SpotlightCard
                  key={a.title}
                  spotlightColor="rgba(237, 45, 45, 0.25)"
                  className="flex flex-col gap-3 rounded-(--radius-card) border bg-card p-6"
                >
                  <Icon className="size-8 text-brand" aria-hidden="true" />
                  <h3 className="text-2xl font-bold">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.line}</p>
                </SpotlightCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- What training gets you ---------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <Image
          src="/images/why-2.jpg"
          alt="Coach working pads with a member at Red Horse Combat Sports, Oklahoma City"
          width={726}
          height={480}
          className="h-auto w-full rounded-(--radius-card) border lg:order-1"
        />
        <div className="flex flex-col gap-6 lg:order-2">
          <SectionHeading title="What training at Red Horse gets you" />
          <ul className="flex flex-col gap-4 text-lg">
            {gets.map((g) => (
              <li key={g} className="flex gap-3">
                <CheckIcon className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                <span>{g}</span>
              </li>
            ))}
          </ul>
          <PrimaryCta />
        </div>
      </section>

      {/* ---------- Classes ---------- */}
      <section className="border-y bg-card/40">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-24 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <SectionHeading title="Classes" description="We recommend 2–3 classes a week to start." />
            <PrimaryCta />
            <Button asChild variant="link" className="w-fit px-0 font-heading text-base tracking-wide text-brand uppercase">
              <Link href="/schedule/">
                Full schedule <ArrowRightIcon />
              </Link>
            </Button>
          </div>
          <div className="rounded-(--radius-card) border bg-card p-6 shadow-(--shadow-card)">
            <ScheduleTable caption="Weekly kickboxing class times" />
          </div>
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-24 text-center">
        <div className="flex gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="size-8 fill-brand text-brand" />
          ))}
        </div>
        <h2 className="text-4xl leading-none font-bold sm:text-5xl">5.0 on Google</h2>
        <p className="max-w-xl text-lg text-muted-foreground">
          Don’t take our word for it. Read what members say about training at Red Horse.
        </p>
        <Button asChild variant="outline" size="lg" className="h-12 font-heading text-base tracking-wide uppercase">
          <a href={site.reviews} target="_blank" rel="noreferrer">
            Read our reviews <ArrowRightIcon />
          </a>
        </Button>
      </section>

      {/* ---------- Memberships ---------- */}
      <section className="border-y bg-card/40">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 py-24 text-center">
          <SectionHeading title="Memberships" align="center" />
          <div className="grid w-full gap-4 sm:grid-cols-3">
            {[
              { label: "First class", price: "Free" },
              { label: "Drop-in", price: `$${pricing.dropIn}`, unit: "/ class" },
              { label: "Membership", price: `$${pricing.monthly}`, unit: "/ month" },
            ].map((p) => (
              <div key={p.label} className="flex flex-col gap-1 rounded-(--radius-card) border bg-card p-6">
                <span className="font-heading text-sm font-semibold tracking-wider text-brand uppercase">{p.label}</span>
                <span className="font-heading text-5xl font-extrabold">
                  {p.price}
                  {p.unit && <span className="ml-1 text-base font-normal text-muted-foreground">{p.unit}</span>}
                </span>
              </div>
            ))}
          </div>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Your first class is free. After that, drop in for ${pricing.dropIn} a class or join for ${pricing.monthly} a
            month. Training twice a week at drop-in rates runs about ${pricing.dropIn * 8} a month, so the membership pays
            for itself fast.
          </p>
          <PrimaryCta />
        </div>
      </section>

      {/* ---------- Youth ---------- */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <SectionHeading
            title="Youth classes"
            description="Discipline, fitness and self-defense for kids and teens, in a fun, safe setting."
          />
          <PrimaryCta />
        </div>
        <Image
          src="/images/why-3.jpg"
          alt="Members training together at Red Horse Combat Sports, Oklahoma City"
          width={726}
          height={480}
          className="h-auto w-full rounded-(--radius-card) border"
        />
      </section>

      {/* ---------- In action ---------- */}
      <section className="border-y bg-card/40 py-24">
        <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-end justify-between gap-6 px-4">
          <SectionHeading title="See what training looks like" />
          <Button asChild variant="outline" size="lg" className="font-heading tracking-wide uppercase">
            <Link href="/in-action/">
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

      {/* ---------- Find us ---------- */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-24 lg:grid-cols-[1fr_1.6fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading title="Find us" />
          <address className="flex flex-col gap-3 text-lg not-italic">
            <span className="font-semibold">{site.name}</span>
            <span className="flex gap-3">
              <MapPinIcon className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
              <span>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postal}
              </span>
            </span>
            <a href={site.phoneHref} className="flex items-center gap-3 hover:text-brand">
              <PhoneIcon className="size-5 text-brand" aria-hidden="true" /> {site.phone}
            </a>
            <span className="flex items-center gap-3">
              <ClockIcon className="size-5 text-brand" aria-hidden="true" /> Classes {site.hours}
            </span>
          </address>
          <div className="flex flex-wrap gap-3">
            <PrimaryCta />
            <Button asChild variant="outline" size="lg" className="h-12 font-heading text-base tracking-wide uppercase">
              <a href={site.mapsLink} target="_blank" rel="noreferrer">
                <NavigationIcon /> {cta.directions}
              </a>
            </Button>
          </div>
        </div>
        <div className="min-h-80 overflow-hidden rounded-(--radius-card) border">
          <iframe
            title="Map to Red Horse Combat Sports"
            src={site.mapsEmbed}
            className="h-full min-h-80 w-full grayscale invert-[0.92] hue-rotate-180"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <CallToAction />
    </>
  )
}
