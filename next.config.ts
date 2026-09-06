import type { NextConfig } from "next";

// basePath is only needed on GitHub Pages (production).
// Local dev (npm run dev) runs without it so localhost:3003/ works normally.
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Portfolio" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;