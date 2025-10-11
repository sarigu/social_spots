import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '', 
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
