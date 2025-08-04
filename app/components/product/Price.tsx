// This is the most important line. It tells Next.js:
// "This isn't a photograph! This is a real, interactive component
// that needs to work in the user's web browser."
'use client'

// We need the 'useCartStore' brain we created earlier so we can tell it to add items.
import { useCartStore } from "@/store/cartStore"
import React from "react" // We always need React for components.

// This is our component. We're calling it 'Price'.
// Notice it's ready to receive the 'product' details from our main page.
const Price = ({ product }: { product: any }) => {

  // Here, we connect to the cart's brain and grab the 'addToCart' tool.
  const { addToCart } = useCartStore()

  // This is the function that will run when the button is clicked.
  const handleCart = () => {
    // It does one simple thing: uses the 'addToCart' tool to add the product.
    addToCart(product)
    console.log("Product added to cart!") // A little message for us to see it works!
  };

  // Here is the HTML for our component.
  return (
    <div className="flex flex-col gap-4">
      {/* We display the price, formatted nicely. */}
      <h2 className="text-2xl font-bold">${parseFloat(product.price).toFixed(2)}</h2>
      
      {/* This is our real, clickable button! */}
      <button
        className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
        // The magic is here: When this button is clicked...
        onClick={handleCart} // ...run our handleCart function.
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Price