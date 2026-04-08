import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "kaistandard.com" }],
        destination: "https://www.kaistandard.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
