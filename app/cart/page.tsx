'use client'

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Trash2 } from "lucide-react";

// Define strict types for the cart item to avoid inference issues
interface CartItem {
  id: string;
  title: string;
  price: string | number; // Handle both types
  quantity: number;
  img?: string; // Next/Image src expects a string
}

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
];

const CartPage = () => {
  const { items, removeFromCart, updateQuantity } = useCartStore();
  const [hasHydrated, setHasHydrated] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const activeStep = parseInt(searchParams.get("step") || "1");

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  // Calculate the total price
  const subtotal = hasHydrated ? items.reduce((acc, item: any) => {
    // FIX: Use Number() instead of parseFloat() to handle both string and number types
    const price = item.price ? Number(item.price) : 0;
    const quantity = item.quantity || 1;
    return acc + price * quantity;
  }, 0) : 0;

  const discount = subtotal * 0.1; // 10% discount
  const shippingFee = subtotal > 0 ? 10 : 0;
  const total = subtotal - discount + shippingFee;

  if (!hasHydrated) {
    return (
      <div className="flex flex-col gap-8 items-center justify-center mt-12">
        <div className="text-center p-10">Loading your cart...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12 px-4">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>
      
      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      
      {/* STEPS & DETAILS */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* STEPS CONTENT */}
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-200 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            items.length === 0 ? (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
              items.map((item: any) => (
                <div
                  className="flex items-center justify-between"
                  key={item.id}
                >
                  {/* IMAGE AND DETAILS */}
                  <div className="flex gap-8">
                    {/* IMAGE */}
                    {item.img && (
                      <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                        <Image
                          src={typeof item.img === 'string' ? item.img : '/placeholder.png'} // Safety check for image type
                          alt={item.title || "Product image"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {/* ITEM DETAILS */}
                    <div className="flex flex-col justify-between">
                      <div className="flex flex-col gap-1">
                        <p className="text-sm font-medium">{item.title}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-16 p-1 text-center border border-gray-300 rounded"
                          />
                          {/* FIX: Use Number() here as well */}
                          <p className="font-medium">
                            ${(item.price ? Number(item.price) * item.quantity : 0).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* DELETE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-300 text-red-400 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))
            )
          ) : activeStep === 2 ? (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Shipping Information</h2>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="p-2 border border-gray-300 rounded"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-2 border border-gray-300 rounded"
                  required
                />
              </form>
            </div>
          ) : activeStep === 3 ? (
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold">Payment Information</h2>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="p-2 border border-gray-300 rounded"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Cardholder Name"
                  className="p-2 border border-gray-300 rounded"
                  required
                />
              </form>
            </div>
          ) : null}
          
          {/* NAVIGATION BUTTONS */}
          <div className="flex justify-between mt-8">
            {activeStep > 1 && (
              <button
                onClick={() => router.push(`/cart?step=${activeStep - 1}`, { scroll: false })}
                className="bg-gray-200 hover:bg-gray-300 transition-all duration-300 text-gray-800 p-2 rounded-lg cursor-pointer flex items-center gap-2"
              >
                Back
              </button>
            )}
            
            {activeStep < 3 ? (
              <button
                onClick={() => router.push(`/cart?step=${activeStep + 1}`, { scroll: false })}
                className="bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center gap-2"
                disabled={items.length === 0 && activeStep === 1}
              >
                Continue
                <ArrowRight className="w-3 h-3" />
              </button>
            ) : (
              <button
                className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer"
              >
                Place Order
              </button>
            )}
          </div>
        </div>
        
        {/* CART SUMMARY */}
        <div className="w-full lg:w-5/12 shadow-lg border border-gray-200 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold">Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Subtotal ({items.length} items)</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Discount (10%)</p>
              <p className="font-medium">-${discount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p className="text-gray-500">Shipping Fee</p>
              <p className="font-medium">{shippingFee > 0 ? `$${shippingFee.toFixed(2)}` : "FREE"}</p>
            </div>
            <hr className="border-gray-200" />
            <div className="flex justify-between">
              <p className="text-gray-800 font-semibold">Total</p>
              <p className="font-medium">${total.toFixed(2)}</p>
            </div>
          </div>
          
          {activeStep === 1 && items.length > 0 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;