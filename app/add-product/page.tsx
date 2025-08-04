"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddProduct = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // We are no longer using Prisma here.
    // Instead, we are sending the form data to our API endpoint.
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to create product");
      }
      
      const data = await res.json();
      console.log("Product created successfully:", data);
      router.push("/products"); // Redirect to the products page after success

    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40 flex items-center justify-center text-red-500">
      <form className="flex flex-wrap gap-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center w-full">Add New Product</h1>
        <div className="w-full flex flex-col gap-2">
          <label>Title</label>
          <input className="ring-1 ring-red-200 p-2 rounded-sm" type="text" name="title" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Description</label>
          <textarea className="ring-1 ring-red-200 p-2 rounded-sm" name="desc" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Price</label>
          <input className="ring-1 ring-red-200 p-2 rounded-sm" type="number" step="0.01" name="price" />
        </div>
        <div className="w-full flex flex-col gap-2">
            <label>Category</label>
            <input className="ring-1 ring-red-200 p-2 rounded-sm" type="text" name="catSlug" />
        </div>
        {/* We will handle the image upload in a later step to keep things simple for now */}
        <button
          type="submit"
          className="bg-red-500 text-white w-full p-3 rounded-md"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;