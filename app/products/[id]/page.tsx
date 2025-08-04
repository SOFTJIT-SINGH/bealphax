// app/products/[id]/page.tsx

import Price from './Price'; // Using the component from the same folder
import React from 'react';

// Define the shape of our product data to avoid errors
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
    // We fetch directly from our API endpoint
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store", // Ensures we always get the latest data
    });

    // If the API returns an error (like 404 or 500), we return null
    if (!res.ok) {
      console.error(`API Error: ${res.status} ${res.statusText}`);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
};

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const singleProduct = await getData(params.id);

  // If we couldn't find a product, we show a friendly message
  if (!singleProduct) {
    return (
      <div className="p-10 text-center text-xl text-red-500">
        Sorry, this product could not be found.
      </div>
    );
  }

  // If we found the product, we display it
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <img
            src={singleProduct.img}
            alt={singleProduct.title}
            className="object-contain"
          />
        </div>
      )}
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl font-bold uppercase xl:text-5xl">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        
        {/* Pass the loaded product data into our interactive Price component */}
        <Price product={singleProduct} />
      </div>
    </div>
  );
};

export default SingleProductPage;