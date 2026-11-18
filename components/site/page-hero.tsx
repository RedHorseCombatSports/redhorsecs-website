import { cn } from "@/lib/utils"

/** Title band used at the top of every inner page. */
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
    <section
      className={cn(
        "relative overflow-hidden border-b bg-[url('/images/hero-bg.jpg')] bg-cover bg-center",
        className
      )}
    >
      <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/70 to-background" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-4 py-20 sm:py-28">
        <h1 className="max-w-3xl text-5xl leading-none font-bold sm:text-7xl">{title}</h1>
        {subtitle && <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">{subtitle}</p>}
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
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center")}>
      <h2 className="max-w-3xl text-4xl leading-none font-bold sm:text-5xl">{title}</h2>
      {description && <p className="max-w-2xl text-lg text-muted-foreground">{description}</p>}
    </div>
  )
}
