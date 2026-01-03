import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from '@/types'; // Ensure this matches your path to types.ts

// 1. Define the CartItem type (Product + quantity)
export interface CartItem extends ProductType {
  quantity: number;
}

// 2. Define the Store's State & Actions
interface CartState {
  items: CartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (productId: string | number) => void;
  updateQuantity: (productId: string | number, quantity: number) => void;
  clearCart: () => void;
}

// 3. Create the store with the Type
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        const cartItems = get().items;
        const productInCart = cartItems.find((item) => item.id === product.id);
        
        // Ensure quantity is treated as a number
        const newQuantity = product.quantity ? Number(product.quantity) : 1;

        if (productInCart) {
          const updatedCart = cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + newQuantity }
              : item
          );
          set({ items: updatedCart });
        } else {
          set({ items: [...cartItems, { ...product, quantity: newQuantity }] });
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
      clearCart: () => {
        set({ items: [] });
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);