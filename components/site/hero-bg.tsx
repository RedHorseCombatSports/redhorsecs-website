import { cn } from "@/lib/utils"

/**
 * The lightning background photo. Phones get a 900px WebP (~10 KB), larger screens a
 * 2000px WebP (~29 KB); the JPEG is the fallback. A plain <picture>, because the static
 * export has no image optimizer to build srcsets for next/image.
 */
export function HeroBg({ priority = false, className }: { priority?: boolean; className?: string }) {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet="/images/hero-bg-sm.webp" type="image/webp" />
      <source srcSet="/images/hero-bg.webp" type="image/webp" />
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("absolute inset-0 -z-20 size-full object-cover", className)}
      />
    </picture>
  )
}
