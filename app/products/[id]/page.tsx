// import React from 'react';
// import prisma from "@/lib/prisma";
// import Image from 'next/image';
// import Price from '../../components/product/Price'; // Using the corrected relative path

// // Define the shape of our product data
// interface Product {
//   id: string;
//   title: string;
//   desc: string;
//   price: number;
//   img?: string | null;
// }

// // This function fetches the data for one specific product
// const getData = async (id: string): Promise<Product | null> => {
//   try {
//     const product = await prisma.product.findUnique({
//       where: { id: id },
//     });
//     return product;
//   } catch (error) {
//     console.error("Failed to fetch product:", error);
//     return null;
//   }
// };

// const SingleProductPage = async ({ params }: { params: { id: string } }) => {
//   const singleProduct = await getData(params.id);

//   if (!singleProduct) {
//     return (
//       <div className="container mx-auto my-10 p-10 text-center text-xl text-zinc-600 dark:text-zinc-400">
//         Sorry, this product could not be found.
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        
//         {/* Image Gallery Section */}
//         <div className="w-full">
//           <div className="aspect-square relative bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-md">
//             {singleProduct.img ? (
//               <Image
//                 src={singleProduct.img}
//                 alt={singleProduct.title}
//                 fill
//                 className="object-cover rounded-lg"
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full text-zinc-500">
//                 No Image Available
//               </div>
//             )}
//           </div>
//           {/* You can add thumbnail images here in the future */}
//         </div>

//         {/* Product Details Section */}
//         <div className="flex flex-col gap-4">
//           <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
//             {singleProduct.title}
//           </h1>
          
//           <p className="text-base text-zinc-600 dark:text-zinc-400">
//             {singleProduct.desc}
//           </p>

//           <div className="mt-4">
//             {/* The Price component handles the price and Add to Cart button */}
//             <Price product={singleProduct} />
//           </div>

//           {/* Additional details like reviews, materials, etc. can go here */}
//           <div className="mt-6 border-t pt-4 border-zinc-200 dark:border-zinc-700">
//             <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-200">Product Details</h3>
//             <ul className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
//               <li>- High-quality materials</li>
//               <li>- Modern, stylish fit</li>
//               <li>- Machine washable</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProductPage;



import React from 'react';
import prisma from "@/lib/prisma";
import Image from 'next/image';
import { Metadata } from 'next';
import ProductInteraction from '@/components/ProductInteraction';
import Price from '../../components/product/Price';

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

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getData(params.id);
  
  return {
    title: product?.title || "Product Not Found",
    description: product?.desc || "Discover this amazing product",
  };
}

const SingleProductPage = async ({ 
  params, 
  searchParams 
}: { 
  params: { id: string };
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const singleProduct = await getData(params.id);
  const { color, size } = await searchParams;

  // Mock data for product variants (you would fetch this from your database)
  const colors = ["gray", "purple", "green"];
  const sizes = ["xs", "s", "m", "l", "xl"];
  
  const selectedColor = color || colors[0];
  const selectedSize = size || sizes[2]; // Default to 'm'

  if (!singleProduct) {
    return (
      <div className="container mx-auto my-10 p-10 text-center text-xl text-zinc-600 dark:text-zinc-400">
        Sorry, this product could not be found.
      </div>
    );
  }

  // Mock images for different colors (you would fetch this from your database)
  const colorImages = {
    gray: singleProduct.img || "/models/m1.jpg",
    purple: "/models/m2.jpg",
    green: "/models/m3.jpg",
  };

  return (
    <div className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-5/12">
          <div className="aspect-square relative bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
            <Image
              src={colorImages[selectedColor as keyof typeof colorImages] || singleProduct.img || "/placeholder.jpg"}
              alt={singleProduct.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Color variants thumbnails */}
          <div className="flex gap-3 mt-4">
            {colors.map((colorOption) => (
              <div
                key={colorOption}
                className={`w-12 h-12 rounded-md overflow-hidden border-2 ${
                  selectedColor === colorOption 
                    ? "border-blue-500" 
                    : "border-gray-200 dark:border-zinc-700"
                }`}
              >
                <Image
                  src={colorImages[colorOption as keyof typeof colorImages] || singleProduct.img || "/placeholder.jpg"}
                  alt={colorOption}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full lg:w-7/12 flex flex-col gap-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {singleProduct.title}
          </h1>
          
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {singleProduct.desc}
          </p>

          <div className="mt-2">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              ${singleProduct.price.toFixed(2)}
            </h2>
          </div>

          {/* Product Interaction (Color, Size, Add to Cart) */}
          <ProductInteraction
            product={{
              id: singleProduct.id,
              name: singleProduct.title,
              description: singleProduct.desc,
              price: singleProduct.price,
              colors,
              sizes,
              images: colorImages
            }}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
          />

          {/* Payment Methods */}
          <div className="flex items-center gap-4 mt-6">
            <div className="w-10 h-6 relative">
              <Image
                src="/klarna.png"
                alt="Klarna"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-10 h-6 relative">
              <Image
                src="/cards.png"
                alt="Credit Cards"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-10 h-6 relative">
              <Image
                src="/stripe.png"
                alt="Stripe"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Terms Notice */}
          <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-4">
            By clicking Add to Cart, you agree to our{" "}
            <span className="underline hover:text-black dark:hover:text-white cursor-pointer">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="underline hover:text-black dark:hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            . You authorize us to charge your selected payment method for the
            total amount shown. All sales are subject to our return and{" "}
            <span className="underline hover:text-black dark:hover:text-white cursor-pointer">
              Refund Policies
            </span>
            .
          </p>

          {/* Product Details Accordion */}
          <div className="mt-6 border-t pt-4 border-zinc-200 dark:border-zinc-700">
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-200 mb-2">Product Details</h3>
            <ul className="text-sm text-zinc-500 dark:text-zinc-400 space-y-1">
              <li>• High-quality materials</li>
              <li>• Modern, stylish fit</li>
              <li>• Machine washable</li>
              <li>• Imported</li>
              <li>• 100% Cotton</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;