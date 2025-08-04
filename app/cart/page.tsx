'use client'

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import React, { useEffect, useState } from "react"; // Make sure to import useState

const CartPage = () => {
  const { cart, removeFromCart } = useCartStore();
  
  // --- 1. The Fix: Add a loading state ---
  // We create a state to check if the component has successfully loaded on the client.
  const [hasHydrated, setHasHydrated] = useState(false);

  // This useEffect runs only once when the component mounts on the browser.
  useEffect(() => {
    // Now we know for sure that we are on the client and the cart has loaded from storage.
    setHasHydrated(true);
  }, []);

  // Calculate the total price
  const totalPrice = hasHydrated ? cart.reduce((acc, item) => {
    const price = item.price ? parseFloat(item.price) : 0;
    return acc + price;
  }, 0) : 0;

  // --- 2. The Fix: Wait until hydrated ---
  // If the component hasn't hydrated yet, we show a simple loading message.
  if (!hasHydrated) {
    return <div className="text-center p-10">Loading your cart...</div>;
  }

  // --- 3. The Original Code (now safe to run) ---
  // By the time the code reaches here, we know 'cart' is ready.
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="flex items-center justify-between mb-4" key={item.id}>
              {item.img && <Image src={item.img} alt="" width={100} height={100} />}
              <div>
                <h1 className="uppercase text-xl font-bold">{item.title}</h1>
              </div>
              <h2 className="font-bold">${item.price ? parseFloat(item.price).toFixed(2) : '0.00'}</h2>
              <span
                className="cursor-pointer text-2xl"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </span>
            </div>
          ))
        )}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal ({cart.length} items)</span>
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
          <span>TOTAL(INCL. VAT)</span>
          <span className="font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;