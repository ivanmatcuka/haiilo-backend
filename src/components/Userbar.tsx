import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useCart } from "@/CartContext";
import { CartItems } from "./CartItems";

export const Userbar = () => {
  const { cartItems } = useCart();

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <p>Cart ({cartItems.length})</p>
        </MenubarTrigger>
        <MenubarContent className="min-w-[250px] p-2">
          {cartItems.length === 0 ? (
            <MenubarItem disabled>Your cart is empty</MenubarItem>
          ) : (
            <CartItems />
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
