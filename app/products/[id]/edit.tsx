'use client';
import { useEffect, useState } from "react";
// 1. CHANGED: Import from next/navigation instead of next/router
import { useRouter, useParams } from "next/navigation"; 
import { toast } from 'react-hot-toast';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: boolean;
};

const EditProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  
  // 2. CHANGED: Use useParams() to get the dynamic ID
  const params = useParams();
  const id = params?.id; // params can be null initially, so use optional chaining

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    const formData = new FormData(e.target as HTMLFormElement);
    const updatedProduct = {
      name: formData.get("name")?.toString(),
      description: formData.get("description")?.toString(),
      price: parseFloat(formData.get("price")?.toString() || "0"),
      imageUrl: formData.get("imageurl")?.toString(),
    };

    try {
      const res = await fetch(`/api/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }

      toast.success("Product updated!");
      router.push(`/products/${product.id}`);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
      toast.error("Failed to update");
    }
  };

  if (error) {
    return <div className="text-red-500 text-center mt-10">{error}</div>;
  }

  if (!product) {
    return <div className="text-center mt-10 text-gray-500">Loading product...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          defaultValue={product.name}
          placeholder="Name"
          className="input-bordered border-2 py-2 px-4 rounded-md input mb-3 w-full"
        />
        <textarea
          name="description"
          defaultValue={product.description}
          placeholder="Description"
          className="input-bordered border-2 py-2 px-4 input max-w-full rounded-md mb-3"
        />
        <input
          name="imageurl"
          defaultValue={product.imageUrl}
          placeholder="Image URL"
          type="url"
          className="input-bordered border-2 py-2 px-4 rounded-md input mb-3 w-full"
        />
        <input
          name="price"
          defaultValue={product.price}
          placeholder="Price"
          type="number"
          className="input-bordered border-2 py-2 px-4 rounded-md mb-3 w-full"
        />
        <button type="submit" className="btn btn-primary btn-block py-2 px-4 rounded-md bg-amber-300">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;