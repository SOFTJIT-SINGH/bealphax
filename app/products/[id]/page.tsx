'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
};

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!product) {
    return <div className="text-center mt-10 text-gray-500">Loading product...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-96 object-cover mb-4 rounded"
          />
        </div>
        <div>
          <p className="text-lg">{product.description}</p>
          <p className="text-xl font-bold mt-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-500 mt-2">{product.inStock ? "In stock" : "Out of stock"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
