"use client"

import * as React from "react"
import { Switch as BaseSwitch } from "@base-ui/react/switch"

import { cn } from "@/lib/utils"

/** Base UI switch, styled with the bank's design tokens. */
function Switch({
  className,
  ...props
}: React.ComponentProps<typeof BaseSwitch.Root>) {
  return (
    <BaseSwitch.Root
      className={cn(
        "flex h-5 w-9 shrink-0 rounded-full bg-input p-0.5 transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-checked:bg-primary",
        className
      )}
      {...props}
    >
      <BaseSwitch.Thumb className="size-4 rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-4" />
    </BaseSwitch.Root>
  )
}

export { Switch }
