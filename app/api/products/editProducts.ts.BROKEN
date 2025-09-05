// pages/api/products/editProduct.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/db/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id, name, description, price, imageUrl } = req.body;

    if (!id || !name || !description || !price || !imageUrl) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    try {
      const updatedProduct = await prisma.product.update({
        where: { id },
        data: { name, description, price, imageUrl },
      });
      res.status(200).json(updatedProduct);
    } catch (error: any) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  }
}
