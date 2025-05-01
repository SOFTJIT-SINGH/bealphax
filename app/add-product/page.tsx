"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast"; // Make sure you have this import

const AddProductPage = () => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

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

      toast.success("Product added successfully! 🎉", {
        icon: '✔️',  // Success icon
        style: {
          background: '#4BB543',  // Green background for success
          color: '#fff',  // White text color
          borderRadius: '8px',  // Round edges for the toast
        },
        className: 'animate-toast-slide-in', // Apply slide-in animation
        duration: 3000,  // Show toast for 3 seconds
      });
      router.push('/'); // Redirect to homepage
    } catch (err: any) {
      toast.error("Something went wrong! 😢", {
        icon: '❌',  // Error icon
        style: {
          background: '#F44336',  // Red background for errors
          color: '#fff',  // White text color
          borderRadius: '8px',  // Round edges for the toast
        },
        className: 'animate-toast-slide-in', // Apply slide-in animation
        duration: 3000,  // Show toast for 3 seconds
      });
    }
  };

  return (
    <div className="items-center max-w-xl mx-auto mt-8 max-h-full">
      <form onSubmit={handleSubmit}>
        <h1 className="font-extrabold text-3xl">Add Product</h1>
        
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
