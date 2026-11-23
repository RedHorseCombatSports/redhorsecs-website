"use client"

import * as React from "react"
import Script from "next/script"

import { site } from "@/lib/site"

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/** Push an event to Google Tag Manager's dataLayer. Safe to call when GTM isn't loaded. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

/**
 * Google Tag Manager container (site.gtmId). Loads only on the real domain, so visits to
 * redhorsecs.netlify.app and local dev don't count in Google Analytics.
 * Also sends a `phone_click` event for every tap on a tel: link.
 */
export function Analytics() {
  const [live, setLive] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hostname only exists in the browser
    setLive(site.analyticsHosts.includes(window.location.hostname))
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]')
      if (link) track("phone_click", { page_path: window.location.pathname })
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  if (!live) return null
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`}
    </Script>
  )
}
