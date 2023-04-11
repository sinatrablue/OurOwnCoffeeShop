import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isCartOpen: boolean;
};

export function ShoppingCart({ isCartOpen }: ShoppingCartProps) {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas onHide={closeCart} show={isCartOpen} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
}
