'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
// import { UploadDropzone } from "@/lib/uploadthing"; // 1. Commented out import
import toast from "react-hot-toast";

const AddProduct = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  // 2. Switched default to 'link' so the form works right away
  const [uploadMethod, setUploadMethod] = useState<'upload' | 'link'>('link');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    if (imageUrl) {
      formData.append("img", imageUrl);
    } else {
        toast.error("Please provide a link.");
        setLoading(false);
        return;
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to create product");
      
      toast.success("Product created successfully!");
      router.push("/products");

    } catch (error) {
      console.error("Error creating product:", error);
      toast.error("Failed to create product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40 flex items-center justify-center text-red-500">
      <form className="w-full max-w-lg flex flex-col gap-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl text-center w-full">Add New Product</h1>

        {/* 3. Commented out the tabs since only 'link' is available for now */}
        {/* <div className="flex border-b">
            <button type="button" onClick={() => setUploadMethod('upload')} className={`p-2 ${uploadMethod === 'upload' ? 'border-b-2 border-red-500' : ''}`}>
                Upload Image
            </button>
            <button type="button" onClick={() => setUploadMethod('link')} className={`p-2 ${uploadMethod === 'link' ? 'border-b-2 border-red-500' : ''}`}>
                Use Image Link
            </button>
        </div> */}

        {uploadMethod === 'upload' ? (
            // 4. Commented out the UploadDropzone component
            // <div>
            //     <label>Upload Image</label>
            //     <UploadDropzone
            //         endpoint="imageUploader"
            //         onClientUploadComplete={(res) => {
            //             if (res && res.length > 0) {
            //                 setImageUrl(res[0].url);
            //                 toast.success("Upload Completed!");
            //             }
            //         }}
            //         onUploadError={(error: Error) => {
            //             toast.error(`Upload Error! ${error.message}`);
            //         }}
            //     />
            // </div>
            <div className="text-center p-4 border-2 border-dashed border-gray-300 rounded-md">
                <p>Image Upload feature is coming soon.</p>
                <button type="button" onClick={() => setUploadMethod('link')} className="text-red-500 underline mt-2">
                    Use Image Link instead
                </button>
            </div>
        ) : (
            <div className="w-full flex flex-col gap-2">
                <label>Image URL</label>
                <input 
                    className="ring-1 ring-red-200 p-2 rounded-sm" 
                    type="url" 
                    name="imageUrlLink" 
                    placeholder="https://images.unsplash.com/..."
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
        )}

        <div className="w-full flex flex-col gap-2">
          <label>Title</label>
          <input className="ring-1 ring-red-200 p-2 rounded-sm" type="text" name="title" required />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Description</label>
          <textarea className="ring-1 ring-red-200 p-2 rounded-sm" name="desc" required />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label>Price</label>
          <input className="ring-1 ring-red-200 p-2 rounded-sm" type="number" step="0.01" name="price" required />
        </div>
        
        <button
          type="submit"
          className="bg-red-500 text-white w-full p-3 rounded-md"
          disabled={loading}
        >
          {loading ? "Creating Product..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;