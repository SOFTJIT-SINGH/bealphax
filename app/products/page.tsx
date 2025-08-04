import Link from 'next/link';
import React from 'react';
import prisma from '@/lib/prisma';

// Define what a Product looks like based on our schema
interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  // We will add the image later, so it's optional for now
  imageUrl?: string; 
}

// This is a Server Component, so we can fetch data directly!
const ProductPage = async () => {
  // We use our prisma client to get all products from the database
  const products: Product[] = await prisma.product.findMany();

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      
      {/* If there are no products, show a message */}
      {products.length === 0 ? (
        <p className="text-center">No products found. Why not add one?</p>
      ) : (
        // Otherwise, display the products in a grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            // Each product is a link to its own detail page
            <Link href={`/products/${product.id}`} key={product.id} className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
              {/* We'll add an image here later */}
              {/* <div className="w-full h-48 bg-gray-200 mb-4 rounded"></div> */}
              
              <h2 className="text-lg font-semibold text-center">{product.title}</h2>
              <p className="text-red-500 font-bold mt-2">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;