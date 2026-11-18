"use client"

import * as React from "react"
import { Slider as BaseSlider } from "@base-ui/react/slider"

import { cn } from "@/lib/utils"

type SliderProps = React.ComponentProps<typeof BaseSlider.Root> & {
  label?: string
}

/** Base UI slider, styled with the bank's design tokens. */
function Slider({ className, label = "Value", ...props }: SliderProps) {
  return (
    <BaseSlider.Root className={cn("w-full", className)} {...props}>
      <BaseSlider.Control className="flex w-full touch-none items-center py-3 select-none">
        <BaseSlider.Track className="h-1.5 w-full rounded-full bg-muted select-none">
          <BaseSlider.Indicator className="rounded-full bg-primary select-none" />
          <BaseSlider.Thumb
            aria-label={label}
            className="size-4 rounded-full border-2 border-primary bg-background shadow-sm select-none has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50"
          />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  )
}

export { Slider }
