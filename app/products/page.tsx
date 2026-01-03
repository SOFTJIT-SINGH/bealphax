import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

// Define the shape of a Product
interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  discountPercentage: number;
}

// Define the shape of the API response
interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const PAGE_SIZE = 8; // Number of items per page

// 1. Fetch function handling Category + Pagination
async function getMenProducts(page: number): Promise<ProductResponse> {
  const skip = (page - 1) * PAGE_SIZE;
  
  // Using 'mens-shirts' category. 
  // Note: DummyJSON also has 'mens-shoes', 'mens-watches'. 
  // To combine them requires more complex logic, so we stick to shirts for "clothing".
  const res = await fetch(
    `https://dummyjson.com/products/category/mens-shirts?limit=${PAGE_SIZE}&skip=${skip}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductListingPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>; // Next.js 15 style params
}) {
  // 2. Parse current page from URL query params (default to 1)
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  // 3. Fetch data
  const data = await getMenProducts(currentPage);
  const totalPages = Math.ceil(data.total / PAGE_SIZE);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Men's Collection</h1>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data.products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group">
            <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-sm overflow-hidden">
              <CardHeader className="p-0 bg-gray-50 relative h-48 md:h-64">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </CardHeader>
              <CardContent className="p-3 pt-4">
                <CardTitle className="text-sm md:text-base font-medium line-clamp-1 text-gray-700">
                  {product.title}
                </CardTitle>
                
                <div className="flex items-center gap-2 mt-2">
                   <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                   </span>
                   <span className="text-xs text-gray-500 line-through">
                      ${(product.price / (1 - product.discountPercentage / 100)).toFixed(0)}
                   </span>
                   <span className="text-xs font-semibold text-green-600">
                      {Math.round(product.discountPercentage)}% off
                   </span>
                </div>
              </CardContent>
              <CardFooter className="p-3 pt-0 flex items-center gap-2">
                 <div className="bg-[#23bb75] text-white text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                    {product.rating.toFixed(1)} <Star className="w-3 h-3 fill-white stroke-none"/>
                 </div>
                 <span className="text-xs text-gray-400">Free Delivery</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {/* PAGINATION CONTROLS */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <Button
          variant="outline"
          disabled={currentPage <= 1}
          asChild={currentPage > 1} // Renders as Link if active, else disabled button
        >
          {currentPage > 1 ? (
            <Link href={`/product?page=${currentPage - 1}`}>Previous</Link>
          ) : (
            <span>Previous</span>
          )}
        </Button>

        <span className="text-sm font-medium text-gray-600">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={currentPage >= totalPages}
          asChild={currentPage < totalPages}
        >
          {currentPage < totalPages ? (
            <Link href={`/product?page=${currentPage + 1}`}>Next</Link>
          ) : (
            <span>Next</span>
          )}
        </Button>
      </div>
    </div>
  );
}