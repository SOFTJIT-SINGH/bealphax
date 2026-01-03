'use client'

import { useCartStore } from "@/store/cartStore";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useMemo } from "react";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const { items, clearCart } = useCartStore();
  const [hasHydrated, setHasHydrated] = useState(false);
  const router = useRouter();

  const { user } = useUser();

  useEffect(() => {
    setHasHydrated(true);
  }, []);
  
  const totalPrice = useMemo(() => {
    // 1. FIX: Cast item to 'any' and wrap price in Number()
    return items.reduce((acc, item: any) => {
      const price = item.price ? Number(item.price) : 0;
      return acc + (price * (item.quantity || 1));
    }, 0);
  }, [items]);

  if (!hasHydrated) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!user) {
        toast.error("You must be logged in to place an order.");
        return;
    }

    const formData = new FormData(e.currentTarget);
    const address = `${formData.get("address")}, ${formData.get("city")}, ${formData.get("state")} ${formData.get("zip")}`;

    try {
        const res = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: items,
                totalPrice: totalPrice,
                address: address,
                userEmail: user.primaryEmailAddress?.emailAddress,
            }),
        });

        if (!res.ok) {
            throw new Error("Something went wrong with placing the order.");
        }

        const data = await res.json();
        clearCart(); 
        toast.success("Order placed successfully!");
        router.push(`/orders/${data.orderId}`);

    } catch (err) {
        console.error(err);
        toast.error("Failed to place order.");
    }
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40 flex flex-col md:flex-row gap-8">
      {/* SHIPPING FORM */}
      <div className="md:w-2/3">
        <h1 className="text-2xl font-bold mb-4">Shipping Information</h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" className="p-2 ring-1 ring-gray-300 rounded" required />
            <input type="text" name="lastName" placeholder="Last Name" className="p-2 ring-1 ring-gray-300 rounded" required />
          </div>
          <input type="text" name="address" placeholder="Address" className="w-full p-2 ring-1 ring-gray-300 rounded" required />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" name="city" placeholder="City" className="p-2 ring-1 ring-gray-300 rounded" required />
            <input type="text" name="state" placeholder="State / Province" className="p-2 ring-1 ring-gray-300 rounded" required />
            <input type="text" name="zip" placeholder="ZIP / Postal Code" className="p-2 ring-1 ring-gray-300 rounded" required />
          </div>
          <input type="email" name="email" placeholder="Email Address" defaultValue={user?.primaryEmailAddress?.emailAddress || ""} className="w-full p-2 ring-1 ring-gray-300 rounded" required />
          
          <button type="submit" className="w-full bg-red-500 text-white p-3 rounded-md mt-4">
            Place Order
          </button>
        </form>
      </div>

      {/* ORDER SUMMARY */}
      <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg h-fit">
        <h2 className="text-xl font-bold mb-4">Your Order</h2>
        <div className="space-y-2">
          {items.map((item: any) => (
            <div key={item.id} className="flex justify-between text-sm">
              <span>{item.title} x{item.quantity}</span>
              {/* 2. FIX: Wrap price in Number() here as well */}
              <span>${(Number(item.price) * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;