import 'dotenv/config';
const isDev = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: isDev
          ? "http://localhost:3000/:path*"
          : "https://trussstart.onrender.com/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: isDev ? 'http' : 'https',
        hostname: isDev ? 'localhost' : 'trussstart.onrender.com',
        pathname: '/rails/active_storage/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;