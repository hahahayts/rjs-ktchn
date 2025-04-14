import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   turbo: false,
  // },
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
