require('dotenv').config(); // Add this to load .env.production during build

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL || 'https://trussstart.onrender.com'}/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST || 'trussstart.onrender.com',
        pathname: '/rails/active_storage/**',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;