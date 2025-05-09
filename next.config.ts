import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {}, // Correct ✅
  },

  serverExternalPackages: ['@prisma/client'], // Moved here ✅

  images: {
    domains: [
      "picsum.photos", 
      "images.unsplash.com", 
      "res.cloudinary.com"
    ],

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
}

export default nextConfig
