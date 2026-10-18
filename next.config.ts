import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  typescript: {
    // Mengabaikan error TypeScript saat proses build di Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Mengabaikan error ESLint saat proses build di Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;