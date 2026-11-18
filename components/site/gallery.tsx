"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { gallery } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

/** Photo grid with a keyboard-navigable lightbox (shadcn Dialog on Radix). */
export function Gallery() {
  const [index, setIndex] = React.useState<number | null>(null)
  const open = index !== null
  const go = (d: number) =>
    setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length))

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {gallery.map((g, i) => (
          <li key={g.src}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group block w-full overflow-hidden rounded-(--radius-card) border focus-visible:ring-3 focus-visible:ring-ring/60 focus-visible:outline-none"
              aria-label={`Open photo ${i + 1} of ${gallery.length}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                width={400}
                height={240}
                loading={i < 8 ? "eager" : "lazy"}
                className="aspect-[5/3] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          className="max-w-5xl border-none bg-transparent p-0 shadow-none sm:max-w-5xl"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1)
            if (e.key === "ArrowLeft") go(-1)
          }}
        >
          <DialogTitle className="sr-only">
            Photo {index !== null ? index + 1 : ""} of {gallery.length}
          </DialogTitle>
          {index !== null && (
            <div className="relative">
              <Image
                src={gallery[index].src}
                alt={gallery[index].alt}
                width={1600}
                height={960}
                className="h-auto max-h-[80svh] w-full rounded-(--radius-card) object-contain"
              />
              <div className="mt-3 flex items-center justify-between">
                <Button variant="secondary" size="icon-lg" onClick={() => go(-1)} aria-label="Previous photo">
                  <ChevronLeftIcon />
                </Button>
                <span className="text-sm text-muted-foreground tabular-nums">
                  {index + 1} / {gallery.length}
                </span>
                <Button variant="secondary" size="icon-lg" onClick={() => go(1)} aria-label="Next photo">
                  <ChevronRightIcon />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
