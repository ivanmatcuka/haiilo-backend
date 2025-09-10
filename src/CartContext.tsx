import { createContext, useContext, useState, type ReactNode } from "react";
import type { Item } from "@/types/item";

type CartItem = {
  item: Item;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Item) => {
    setItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);

      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }

      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeItem = (itemId: string) => {
    setItems((prev) =>
      prev
        .map((ci) =>
          ci.item.id === itemId ? { ...ci, quantity: ci.quantity - 1 } : ci
        )
        .filter((ci) => ci.quantity > 0)
    );
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");

  return context;
}
