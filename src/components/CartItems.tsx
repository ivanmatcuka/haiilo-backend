import { MenubarItem, MenubarSeparator } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { useCart } from "@/CartContext";
import { MinusCircleIcon } from "lucide-react";
import { Badge } from "./ui/badge";

export const CartItems = () => {
  const { cartItems, total, totalOffer, removeItem, clearCart } = useCart();
  const isOfferApplicable = !!totalOffer && totalOffer < total;

  return (
    <>
      {cartItems.map((ci) => (
        <MenubarItem
          key={ci.item.id}
          className="flex items-start justify-between gap-6"
        >
          <div className="flex flex-col gap-1">
            <span>
              {ci.item.name} × {ci.quantity}
            </span>
            <span className="text-xs text-gray-500">
              {ci.item.price.toFixed(2)}€
            </span>
            {!!ci.total && ci.total < ci.item.price * ci.quantity && (
              <Badge variant="destructive">
                {ci.item.offers[0].numberOfItems} for{" "}
                {ci.item.offers[0].price.toFixed(2)}€
              </Badge>
            )}
          </div>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => removeItem(ci.item.id, true)}
          >
            <MinusCircleIcon color="red" />
          </Button>
        </MenubarItem>
      ))}

      <MenubarSeparator />

      <MenubarItem className="flex justify-between w-full font-bold">
        <span>Total</span>
        <div className="flex flex-col justify-end gap-1">
          <span
            className={`${
              isOfferApplicable ? "line-through  text-gray-500" : ""
            }`}
          >
            {total.toFixed(2)}€
          </span>
          {isOfferApplicable && <span>{totalOffer.toFixed(2)}€</span>}
        </div>
      </MenubarItem>

      <MenubarSeparator />

      <MenubarItem className="flex justify-between w-full">
        <Button
          size="sm"
          variant="secondary"
          onClick={clearCart}
          className="w-full"
        >
          Clear Cart
        </Button>
      </MenubarItem>
    </>
  );
};
