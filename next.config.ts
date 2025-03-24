import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Static export option

  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io',
        protocol: 'https',
      },
      {
        hostname: 'img.clerk.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
