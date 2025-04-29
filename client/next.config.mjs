const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*", // for local dev only
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trussstart.onrender.com',
        pathname: '/rails/active_storage/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;