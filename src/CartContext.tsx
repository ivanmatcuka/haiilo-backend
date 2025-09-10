"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import type { Item } from "@/types/item";
import type { Offer } from "@/types/offer";

type CartItem = {
  item: Item;
  quantity: number;
  total: number;
};

type CartContextType = {
  items: Item[];
  offers: Offer[];
  cartItems: CartItem[];
  addItem: (item: Item) => void;
  removeItem: (itemId: string) => void;
  clearItem: (itemId: string) => void;
  clearCart: () => void;
  total: number;
  totalOffer: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  items: Item[];
  offers: Offer[];
};
export const CartProvider: FC<PropsWithChildren<CartProviderProps>> = ({
  children,
  items,
  offers,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const computeItemTotal = useCallback(
    (item: Item, quantity: number): number => {
      const offer = offers.find((o) => o.itemId === item.id);

      if (
        offer &&
        new Date() >= new Date(offer.validFrom) &&
        new Date() <= new Date(offer.validTo) &&
        offer.numberOfItems === quantity
      ) {
        console.log(offer.price);
        return offer.price;
      }

      return item.price * quantity;
    },
    [offers]
  );

  const addItem = (item: Item) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);

      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id
            ? {
                ...ci,
                quantity: ci.quantity + 1,
                total: computeItemTotal(item, ci.quantity + 1),
              }
            : ci
        );
      }

      return [...prev, { item, quantity: 1, total: computeItemTotal(item, 1) }];
    });
  };

  const removeItem = (itemId: string) => {
    setCartItems((prev) =>
      prev
        .map((ci) =>
          ci.item.id === itemId
            ? {
                ...ci,
                quantity: ci.quantity - 1,
                total: computeItemTotal(ci.item, ci.quantity - 1),
              }
            : ci
        )
        .filter((ci) => ci.quantity > 0)
    );
  };

  const clearItem = (itemId: string) => {
    setCartItems((prev) =>
      prev
        .map((ci) =>
          ci.item.id === itemId
            ? {
                ...ci,
                quantity: 0,
                total: 0,
              }
            : ci
        )
        .filter((ci) => ci.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );
  const totalOffer = cartItems.reduce((sum, ci) => sum + ci.total, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        offers,
        cartItems,
        total,
        totalOffer,
        clearItem,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");

  return context;
}
