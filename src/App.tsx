import { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { itemsService } from "@/services/itemsService";
import type { Item } from "@/types/item";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    itemsService.getAll().then((result) => setItems(result));
  }, []);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  const handleCheckout = async () => {
    // const { total } = await checkout(cart);
    // setTotal(total);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Pick Items</h1>
      <Carousel>
        {items.map((item: Item) => (
          <CarouselItem key={item.id}>{item.name}</CarouselItem>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
