import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselItem } from "./components/ui/carousel";
import { Item } from "../models/item";
// import { fetchItems, checkout } from "./api";
// import ItemList from "./components/ItemList";
// import Cart from "./components/Cart";

function App() {
  const [items, setItems] = useState<any[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    // fetchItems().then(setItems);
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
