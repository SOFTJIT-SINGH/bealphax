'use client'

import { useCartStore } from "@/store/cartStore";
import React, { useEffect } from "react";
import toast from "react-hot-toast"

const Price = ({ product }: { product: any }) => {
  const { addToCart } = useCartStore();

  useEffect(() => {
    // This makes sure the cart is loaded from storage when the page loads
    useCartStore.persist.rehydrate();
  }, []);

  const handleCart = () => {
    addToCart(product);
    toast.success("The product was added to the cart!");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${parseFloat(product.price).toFixed(2)}</h2>
      <button
        className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
        onClick={handleCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Price;