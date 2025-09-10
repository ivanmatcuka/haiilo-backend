import { useMemo, type FC } from "react";
import { IconShoppingBag } from "@tabler/icons-react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import type { Item } from "@/types/item";
import { Button } from "@/components/ui/button";
import { useCart } from "@/CartContext";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";

type CustomCarouselItemProps = {
  item: Item;
};
export const CustomCarouselItem: FC<CustomCarouselItemProps> = ({ item }) => {
  const { addItem, removeItem, cartItems } = useCart();

  const cartItem = useMemo(
    () => cartItems.find((ci) => ci.item.id === item.id),
    [cartItems]
  );

  return (
    <CarouselItem>
      <Card>
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardFooter>
          {cartItem?.quantity ? (
            <Button className="flex" variant="outline">
              <div onClick={() => removeItem(item.id)}>
                <MinusCircleIcon color="red" />
              </div>
              {cartItem?.quantity}
              <div onClick={() => addItem(item)}>
                <PlusCircleIcon color="green" />
              </div>
            </Button>
          ) : (
            <Button onClick={() => addItem(item)} variant="default">
              Add
              <IconShoppingBag />
            </Button>
          )}
        </CardFooter>
      </Card>
    </CarouselItem>
  );
};
