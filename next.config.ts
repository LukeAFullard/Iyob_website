import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/Iyob_website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
