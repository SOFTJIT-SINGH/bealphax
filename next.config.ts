import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Server Actions are strictly stable in Next.js 15/16, so this experimental block is usually not needed.
  // You can keep it if you have other experimental features, otherwise it's safe to remove.
  experimental: {
    // serverActions: {}, 
  },

  serverExternalPackages: ['@prisma/client'],

  images: {
    // Combine ALL your domains here using remotePatterns (recommended over 'domains')
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io', // Highly recommended if using UploadThing for images
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
};

export default nextConfig;