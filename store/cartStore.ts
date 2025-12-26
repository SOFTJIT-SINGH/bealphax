import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const cartItems = get().items;
        const productInCart = cartItems.find((item) => item.id === product.id);
        if (productInCart) {
          const updatedCart = cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set({ items: updatedCart });
        } else {
          set({ items: [...cartItems, { ...product, quantity: 1 }] });
        }
      },
      removeFromCart: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },
      updateQuantity: (productId, quantity) => {
          if (quantity < 1) {
              get().removeFromCart(productId);
          } else {
              set({
                  items: get().items.map((item) => 
                      item.id === productId ? { ...item, quantity: quantity } : item
                  )
              });
          }
      },
      // --- ADD THIS FUNCTION ---
      clearCart: () => {
        set({ items: [] });
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);