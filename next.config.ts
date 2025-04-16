import type { NextConfig } from "next";

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/blog', // e.g., '/blog' or '/dashboard'
        permanent: true, // HTTP 301 redirect (change to false for temporary)
      },
    ];
  },
};

export default nextConfig;
