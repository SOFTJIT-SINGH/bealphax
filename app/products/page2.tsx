// app/products/page.tsx
// This page shows all products available in the database.
// It fetches product data from the database using Prisma and displays them in a grid layout.
// Each product links to its detailed page.


import Link from 'next/link';
import React from 'react';
import prisma from '@/lib/prisma';
import Image from 'next/image';

interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  img?: string | null;
}

const ProductsPage = async () => {
  const products: Product[] = await prisma.product.findMany();

  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 py-10 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            All Products
          </h1>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Discover our latest collection.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">No Products Yet</h2>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-zinc-800">
                  <div className="relative h-full w-full">
                    {/* --- THIS IS THE UPGRADED PART --- */}
                    <Image
                      // If product.img exists, use it. Otherwise, use the placeholder '/p1.png'.
                      src={product.img || '/models/m2.jpg'}
                      alt={product.title}
                      fill
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-zinc-700 dark:text-zinc-200">
                      {product.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                    Rs. {product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;