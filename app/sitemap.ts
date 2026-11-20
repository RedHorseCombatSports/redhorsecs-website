import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

export const dynamic = "force-static"

const pages = [
  { path: "/", priority: 1 },
  { path: "/free-class/", priority: 0.9 },
  { path: "/schedule/", priority: 0.8 },
  { path: "/pricing/", priority: 0.8 },
  { path: "/faq/", priority: 0.6 },
  { path: "/location/", priority: 0.7 },
  { path: "/why-red-horse/", priority: 0.5 },
  { path: "/in-action/", priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: `${site.url}${p.path}`, lastModified: new Date(), priority: p.priority }))
}
