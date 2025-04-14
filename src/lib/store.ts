// stores/useCart.ts
import { create } from "zustand";
import { Product } from "@prisma/client";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product, quantity = 1) => {
    const existing = get().items.find((item) => item.product.id === product.id);

    if (existing) {
      set({
        items: get().items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      });
    } else {
      set({
        items: [...get().items, { product, quantity }],
      });
    }
  },
  removeItem: (productId) =>
    set({
      items: get().items.filter((item) => item.product.id !== productId),
    }),
  clearCart: () => set({ items: [] }),
}));
