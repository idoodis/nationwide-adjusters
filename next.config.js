/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['localhost'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig 