import { create } from 'zustand';

export const useCartStore = create((set) => ({
  // State: An array to hold the products in the cart
  cart: [],

  // Actions: Functions to modify the state
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product],
  })),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId),
  })),

  clearCart: () => set({ cart: [] }),
}));