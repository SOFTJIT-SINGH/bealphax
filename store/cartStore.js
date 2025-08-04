import { create } from 'zustand';
// --- 1. IMPORT THE 'PERSIST' MIDDLEWARE ---
import { persist } from 'zustand/middleware';

// --- 2. WRAP YOUR STORE DEFINITION IN persist() ---
export const useCartStore = create(
  persist(
    (set, get) => ({
      // State: An array to hold the products in the cart
      cart: [],
      
      // Actions: Functions to modify the state
      addToCart: (product) => {
        // Check if the product is already in the cart to avoid duplicates if needed
        const cart = get().cart;
        const findProduct = cart.find((p) => p.id === product.id);

        if (findProduct) {
          // You can decide to increase quantity here if you want
          return;
        }

        set((state) => ({
          cart: [...state.cart, product],
        }));
      },

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      clearCart: () => set({ cart: [] }),
    }),
    {
      // --- 3. CONFIGURE PERSISTENCE ---
      name: 'cart-storage', // The name of the item in localStorage
    }
  )
);