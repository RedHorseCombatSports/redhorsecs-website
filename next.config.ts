import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // The bank is fully static (gallery + registry JSON), so export plain HTML to `out/`.
  // Hosts like Netlify then serve it with no server or framework adapter.
  output: "export",
  // URLs end in "/" like the old WordPress site (/faq/, /schedule/).
  trailingSlash: true,
  // Static export has no image optimization server; serve images as-is.
  images: { unoptimized: true },
}

export default nextConfig
