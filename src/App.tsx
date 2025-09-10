import { ItemsCarousel } from "@/components/ItemsCarousel";
import { Userbar } from "@/components/Userbar";
import { CartProvider } from "@/CartContext";
import { itemsService } from "./services/itemsService";
import { useEffect, useState } from "react";
import type { Item } from "@/types/item";
import type { Offer } from "@/types/offer";
import { offersService } from "./services/offersService";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    itemsService.getAll().then((result) => setItems(result));
    offersService.getAll().then((result) => setOffers(result));
  }, []);

  return (
    <CartProvider items={items} offers={offers}>
      <div className="p-4 mx-auto max-w-lg">
        <div className="w-full flex justify-between">
          <h1 className="text-xl font-bold mb-4">Pick Items</h1>
          <Userbar />
        </div>
        <ItemsCarousel />
      </div>
    </CartProvider>
  );
}

export default App;
