import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://wizzle-demo-backend-git-dev-jasper-projects.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
