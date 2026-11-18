"use client"

import { BlurFade } from "@/components/magicui/blur-fade"

/** Fades a block in as it scrolls into view (Magic UI BlurFade). */
export default function BlurFadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <BlurFade inView delay={delay} className={className}>
      {children}
    </BlurFade>
  )
}
