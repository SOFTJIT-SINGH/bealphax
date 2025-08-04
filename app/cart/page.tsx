'use client'

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartPage = () => {
  // 1. Get the new `items` array and `updateQuantity` function from the store
  const { items, removeFromCart, updateQuantity } = useCartStore();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  // 2. Calculate the total price based on price * quantity
  const totalPrice = hasHydrated ? items.reduce((acc, item) => {
    const price = item.price ? parseFloat(item.price) : 0;
    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0) : 0;

  if (!hasHydrated) {
    return <div className="text-center p-10">Loading your cart...</div>;
  }

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {items.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div className="flex items-center justify-between mb-4" key={item.id}>
              {item.img && <Image src={item.img} alt="" width={100} height={100} />}
              <div className="flex-1 ml-4">
                <h1 className="uppercase text-xl font-bold">{item.title}</h1>
              </div>
              <div className="flex items-center gap-4">
                {/* 3. Add an input for quantity */}
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 p-1 text-center ring-1 ring-red-300"
                />
                <h2 className="font-bold">${(item.price ? parseFloat(item.price) * item.quantity : 0).toFixed(2)}</h2>
                <span
                  className="cursor-pointer text-2xl font-bold"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal ({items.length} items)</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>TOTAL</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
<Link href="/checkout" className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end text-center">
  CHECKOUT
</Link>
      </div>
    </div>
  );
};

export default CartPage;