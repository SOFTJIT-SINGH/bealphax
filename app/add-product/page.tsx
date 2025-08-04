"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
// --- 1. IMPORT UPLOADTHING COMPONENTS ---
import { UploadDropzone } from "@/lib/uploadthing";

const AddProduct = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  // --- 2. ADD STATE TO HOLD THE IMAGE URL ---
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    // --- 3. ADD THE IMAGE URL TO THE FORM DATA ---
    if (imageUrl) {
      formData.append("img", imageUrl);
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create product");
      
      router.push("/products");
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

        {/* --- 4. ADD THE UPLOADTHING COMPONENT --- */}
        <div className="w-full">
          <label>Image</label>
          <UploadDropzone
            endpoint="imageUploader" // This must match the name in your core.ts
            onClientUploadComplete={(res) => {
              // When upload is complete, save the URL in our state
              if (res && res.length > 0) {
                setImageUrl(res[0].url);
                alert("Upload Completed");
              }
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>

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