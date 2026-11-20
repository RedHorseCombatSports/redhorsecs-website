import type { Metadata } from "next"
import { Inter, Roboto_Condensed } from "next/font/google"

import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SiteHeader } from "@/components/site/site-header"
import { SiteFooter } from "@/components/site/site-footer"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

// Brand fonts: Roboto Condensed (headings, from the current site) + Inter (body).
const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const fontHeading = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Kickboxing Gym in Oklahoma City | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: { siteName: site.name, locale: "en_US", type: "website" },
  // Staging copy: keep out of search results until it replaces redhorsecs.com.
  robots: { index: false, follow: false },
}

// LocalBusiness schema from the copy spec. Opening hours are left out until they match
// the Google Business Profile exactly; no review rating, by design.
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: site.name,
  legalName: site.legalName,
  alternateName: "Red Horse Kickboxing",
  description:
    "Kickboxing gym in Oklahoma City with beginner-friendly group classes, private training and youth programs. Your first class is free.",
  url: `${site.url}/`,
  telephone: "+1-405-361-5815",
  email: site.email,
  image: `${site.url}/images/logo.png`,
  priceRange: "$20–$125",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  sameAs: [site.facebook, site.instagram],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("dark antialiased", fontSans.variable, fontHeading.variable, "font-sans")}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#main"
          className="sr-only z-100 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <TooltipProvider>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </TooltipProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  )
}
