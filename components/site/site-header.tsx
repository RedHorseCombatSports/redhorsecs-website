"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, PhoneIcon } from "lucide-react"

import { cta, footerNav, nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import StarBorder from "@/components/react-bits/StarBorder"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Pages hidden on the free-class flow's mobile bar (the form is already on screen).
const noStickyBar = ["/free-class"]

export function SiteHeader() {
  const pathname = usePathname()
  const isActive = (href: string) => {
    const h = href.replace(/\/$/, "")
    return h === "" ? pathname === "/" : pathname.startsWith(h)
  }
  const mobileNav = [nav[0], ...footerNav]
  const showStickyBar = !noStickyBar.some((p) => pathname.startsWith(p))

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-4">
          <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${site.name} home`}>
            <Image src="/images/logo-nav.png" alt="Red Horse Combat Sports logo" width={57} height={40} priority className="h-10 w-auto" />
          </Link>

          <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {nav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 font-heading text-sm font-medium tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground",
                  isActive(item.href) && "text-foreground"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 px-2 text-sm font-medium text-muted-foreground hover:text-foreground md:inline-flex"
            >
              <PhoneIcon className="size-4 text-brand" aria-hidden="true" /> {site.phone}
            </a>
            {/* React Bits StarBorder draws on a canvas, so it needs literal colors for the stars (brand red from tokens.css); surface, text and border use tokens. */}
            <StarBorder
              as={Link}
              href="/free-class/"
              theme="dark"
              color="#ed2d2d"
              trailColor="#ff8a8a"
              backgroundColor="var(--background)"
              textColor="var(--foreground)"
              borderColor="color-mix(in srgb, var(--brand) 40%, transparent)"
              radius={6}
              thickness={1.5}
              duration={4}
              hover="brighten"
              className="hidden px-5 py-2.5 font-heading text-sm font-semibold tracking-wide uppercase sm:inline-flex"
            >
              {cta.nav}
            </StarBorder>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-lg" className="lg:hidden" aria-label="Open menu">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="font-heading uppercase">Menu</SheetTitle>
                </SheetHeader>
                <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                  {mobileNav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cn(
                          "rounded-md px-3 py-2.5 font-heading text-lg tracking-wide uppercase hover:bg-accent",
                          isActive(item.href) ? "text-brand" : "text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-2 p-4 text-sm text-muted-foreground">
                  <a href={site.phoneHref} className="hover:text-foreground">{site.phone}</a>
                  <a href={`mailto:${site.email}`} className="hover:text-foreground">{site.email}</a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile sticky bar: primary CTA + tap-to-call (copy spec). */}
      {showStickyBar && (
        <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t bg-background/95 p-3 backdrop-blur-xl sm:hidden">
          <Button asChild size="lg" className="h-12 flex-1 font-heading text-base tracking-wide uppercase">
            <Link href="/free-class/">{cta.primary}</Link>
          </Button>
          <Button asChild variant="outline" size="icon-lg" className="size-12">
            <a href={site.phoneHref} aria-label="Call Red Horse Combat Sports">
              <PhoneIcon />
            </a>
          </Button>
        </div>
      )}
    </>
  )
}
