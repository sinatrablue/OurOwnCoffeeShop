import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/store_items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import PutToTrash from "../images/trash.svg";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItemFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img src={item.imgUrl} width="25%" />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span style={{ fontSize: ".65rem" }}>x{quantity}</span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)} </div>
      <Button
        variant="outline-danger"
        onClick={() => removeItemFromCart(item.id)}
        style={{ height: "3rem", width: "3rem" }}
      >
        <img src={PutToTrash} alt="TRASH" />
      </Button>
    </Stack>
  );
}
