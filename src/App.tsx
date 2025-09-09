import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
      <h1 className="text-xl mb-4">Checkout Kata</h1>
      {/* <ItemList items={items} onAdd={addToCart} /> */}
      {/* <Cart cart={cart} items={items} /> */}
      <Button onClick={handleCheckout}>Checkout</Button>
      {total > 0 && <p className="mt-2">Total: {total}</p>}
    </div>
  );
}

export default App;
