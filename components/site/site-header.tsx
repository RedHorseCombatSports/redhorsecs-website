"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { nav, site } from "@/lib/site"
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

// FAQ lives in the footer only.
const headerNav = nav.filter((item) => item.href !== "/faq")

export function SiteHeader() {
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center gap-6 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${site.name} home`}>
          <Image src="/images/logo.png" alt="" width={80} height={61} priority className="h-[60px] w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {headerNav.slice(1, -1).map((item) => (
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
          {/* React Bits StarBorder draws on a canvas, so it needs literal colors for the stars (brand red from tokens.css); surface, text and border use tokens. */}
          <StarBorder
            as={Link}
            href="/hit-us-up"
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
            First week free
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
                {headerNav.map((item) => (
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
  )
}
