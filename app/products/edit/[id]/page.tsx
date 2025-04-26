// app/products/edit/[id].tsx
'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const EditProductPage = () => {
  const [product, setProduct] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // Fetch product data from API
      fetch(`/api/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((err) => setError('Product not found'));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!product) return;

    const updatedProduct = await fetch(`/api/products/editProduct`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    }).then((res) => res.json());

    router.push('/products');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      {error && <p>{error}</p>}
      {product ? (
        <form onSubmit={handleSubmit}>
          <h1>Edit Product</h1>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
          />
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Product Description"
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <input
            type="url"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <button type="submit">Update Product</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditProductPage;
