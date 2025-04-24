/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false,
    async rewrites() {
        return [
          {
            source: "/api/:path*",
            destination: "http://localhost:3000/:path*",
          },
        ];
      },
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/rails/active_storage/**',
          },
        ],
      },
};

export default nextConfig;
