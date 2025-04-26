// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '@/lib/generated/prisma' // ✅

 const globalForPrisma = globalThis as unknown as {
   prisma: PrismaClient | undefined 
 }

 export const prisma = globalForPrisma.prisma ?? new PrismaClient()
 if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
 
 // Optional: Add a cleanup for serverless environments (disconnect Prisma)
if (process.env.NODE_ENV === 'production') {
  process.on('SIGINT', async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
}