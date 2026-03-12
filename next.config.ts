import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "bnsp.go.id",
      },
      {
        protocol: "https",
        hostname: "bangkit.academy",
      },
      {
        protocol: "https",
        hostname: "tbi.co.id",
      },
    ],
  },
};

export default nextConfig;
