// pages/api/products/deleteProduct.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/db/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Product ID is required' });
    }

    try {
      await prisma.product.delete({
        where: { id },
      });
      res.status(200).json({ message: 'Product deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }
}
