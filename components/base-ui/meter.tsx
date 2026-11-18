"use client"

import * as React from "react"
import { Meter as BaseMeter } from "@base-ui/react/meter"

import { cn } from "@/lib/utils"

type MeterProps = React.ComponentProps<typeof BaseMeter.Root> & {
  label: string
}

/** Base UI meter (e.g. capacity, progress toward a goal), styled with tokens. */
function Meter({ className, label, ...props }: MeterProps) {
  return (
    <BaseMeter.Root
      className={cn("grid w-full grid-cols-2 gap-y-2", className)}
      {...props}
    >
      <BaseMeter.Label className="text-sm font-medium">{label}</BaseMeter.Label>
      <BaseMeter.Value className="text-right text-sm text-muted-foreground tabular-nums" />
      <BaseMeter.Track className="col-span-2 h-2 overflow-hidden rounded-full bg-muted">
        <BaseMeter.Indicator className="rounded-full bg-primary transition-[width] duration-500" />
      </BaseMeter.Track>
    </BaseMeter.Root>
  )
}

export { Meter }
