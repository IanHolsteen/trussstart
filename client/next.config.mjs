const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  devIndicators: false,
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
