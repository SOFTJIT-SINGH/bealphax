import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {}, // Correct ✅
  },

  serverExternalPackages: ['@prisma/client'], // Moved here ✅

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
}

export default nextConfig
