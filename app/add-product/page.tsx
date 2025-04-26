"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const AddProductPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name')?.toString(),
      description: formData.get('description')?.toString(),
      price: parseFloat(formData.get('price')?.toString() || '0'),
      imageUrl: formData.get('imageurl')?.toString(),
    };

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      toast.success("Product added successfully! 🎉"); // ✅ toast for success
      router.push('/'); // Redirect to homepage
    } catch (err: any) {
      toast.error(err.message || 'Something went wrong! 😢'); // ✅ toast for error
    }
  };

  return (
    <div className="items-center max-w-xl mx-auto mt-8 max-h-full">
      <form onSubmit={handleSubmit}>
        <h1 className="font-extrabold text-3xl">Add Product</h1>
        {error && <div className="text-red-500">{error}</div>}
        {successMessage && <div className="text-green-500">{successMessage}</div>}
        
        <input required name="name" placeholder="Name" className="input-bordered border-2 py-2 px-4 rounded-md input mb-3 w-full"/>
        <textarea required name="description" placeholder="Description" className="input-bordered border-2 py-2 px-4 input max-w-full rounded-md"/>
        <input required name="imageurl" placeholder="Image URL" type="url" className="input-bordered border-2 py-2 px-4 rounded-md input mb-3 w-full"/>
        <input required name="price" placeholder="Price" type="number" className="input-bordered input border-2 py-2 px-4 rounded-md mb-3 w-full"/>
        
        <button className="btn btn-primary btn-block py-2 px-4 rounded-md bg-amber-300" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
