import { cn } from "@/lib/utils"
import { HeroBg } from "@/components/site/hero-bg"

/** Title band at the top of every inner page: lightning photo under a left-to-right dark fade. */
export function PageHero({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <section className={cn("relative isolate overflow-hidden border-b", className)}>
      <HeroBg priority className="object-right" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-background/95 via-background/75 to-background/45"
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pt-20 pb-16 sm:pt-26 sm:pb-22">
        <h1 className="max-w-2xl text-4xl leading-[1.02] font-bold sm:text-[56px]">{title}</h1>
        {subtitle && <p className="max-w-xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  )
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string
  description?: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center")}>
      <h2 className="max-w-3xl text-4xl leading-none font-bold sm:text-5xl">{title}</h2>
      {description && <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>}
    </div>
  )
}
