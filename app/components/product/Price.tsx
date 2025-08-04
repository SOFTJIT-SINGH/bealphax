'use client'

import { useCartStore } from "@/store/cartStore";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const Price = ({ product }: { product: any }) => {
  const { addToCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCart = () => {
    addToCart(product);
    toast.success("Added to cart!");
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Price is now larger and more prominent */}
      <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        ${parseFloat(product.price).toFixed(2)}
      </span>
      {/* The button has a more modern, clean look */}
      <button
        onClick={handleCart}
        className="w-full max-w-xs bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900 py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Price;