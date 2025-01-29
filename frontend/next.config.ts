import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: process.env.IMAGE_HOSTNAME || "localhost" },
      { protocol: "http", hostname: "localhost" },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
