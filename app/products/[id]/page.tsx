import React from 'react';
import prisma from "@/lib/prisma";
import Image from 'next/image';
import Price from '../../components/product/Price'; // Using the corrected relative path

// Define the shape of our product data
interface Product {
  id: string;
  title: string;
  desc: string;
  price: number;
  img?: string | null;
}

// This function fetches the data for one specific product
const getData = async (id: string): Promise<Product | null> => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
    });
    return product;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const singleProduct = await getData(params.id);

  if (!singleProduct) {
    return (
      <div className="container mx-auto my-10 p-10 text-center text-xl text-zinc-600 dark:text-zinc-400">
        Sorry, this product could not be found.
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Image Gallery Section */}
        <div className="w-full">
          <div className="aspect-square relative bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-md">
            {singleProduct.img ? (
              <Image
                src={singleProduct.img}
                alt={singleProduct.title}
                fill
                className="object-cover rounded-lg"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-zinc-500">
                No Image Available
              </div>
            )}
          </div>
          {/* You can add thumbnail images here in the future */}
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {singleProduct.title}
          </h1>
          
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            {singleProduct.desc}
          </p>

          <div className="mt-4">
            {/* The Price component handles the price and Add to Cart button */}
            <Price product={singleProduct} />
          </div>

          {/* Additional details like reviews, materials, etc. can go here */}
          <div className="mt-6 border-t pt-4 border-zinc-200 dark:border-zinc-700">
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Product Details</h3>
            <ul className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
              <li>- High-quality materials</li>
              <li>- Modern, stylish fit</li>
              <li>- Machine washable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;