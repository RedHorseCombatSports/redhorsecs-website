"use client"

import * as React from "react"
import { NumberField as BaseNumberField } from "@base-ui/react/number-field"
import { MinusIcon, PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type NumberFieldProps = React.ComponentProps<typeof BaseNumberField.Root> & {
  label: string
}

const stepper =
  "flex h-full w-9 items-center justify-center border border-input bg-background text-foreground outline-none select-none hover:bg-muted active:bg-accent data-disabled:opacity-50"

/** Base UI number field with +/- steppers and drag-to-scrub label. */
function NumberField({ className, label, ...props }: NumberFieldProps) {
  const id = React.useId()
  return (
    <BaseNumberField.Root
      id={id}
      className={cn("flex flex-col items-start gap-1.5", className)}
      {...props}
    >
      <BaseNumberField.ScrubArea className="cursor-ew-resize select-none">
        <label htmlFor={id} className="cursor-ew-resize text-sm font-medium">
          {label}
        </label>
      </BaseNumberField.ScrubArea>
      <BaseNumberField.Group className="flex h-9">
        <BaseNumberField.Decrement
          className={cn(stepper, "rounded-l-md border-r-0")}
        >
          <MinusIcon className="size-4" />
        </BaseNumberField.Decrement>
        <BaseNumberField.Input className="h-full w-[8ch] border border-input bg-background px-2 text-center text-sm tabular-nums outline-none focus:z-1 focus:ring-3 focus:ring-ring/50" />
        <BaseNumberField.Increment
          className={cn(stepper, "rounded-r-md border-l-0")}
        >
          <PlusIcon className="size-4" />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  )
}

export { NumberField }
