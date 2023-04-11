import { Button, Card, Col } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import AddToCartImage from "../images/add-to-cart.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
};

export function StoreItem({
  id,
  name,
  price,
  description,
  imgUrl,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItemFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100" style={{ "flex-direction": "row" }}>
      <Card.Img
        variant="left"
        src={imgUrl}
        width="20%"
        // style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text className="d-flex justify-content-between">
          <span className="fs-5">{description}</span>
          <div className="mt-auto">
            {quantity === 0 ? (
              <div className="d-flex align-items-center flex-column">
                <Button
                  onClick={() => increaseItemQuantity(id)}
                  style={{ height: "3rem", width: "3rem" }}
                >
                  <img src={AddToCartImage} alt="ADD_TO_CART"></img>
                </Button>
              </div>
            ) : (
              <div
                className="d-flex align-items-center flex-column"
                style={{ gap: ".5rem" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ gap: ".5rem" }}
                >
                  <Button
                    onClick={() => decreaseItemQuantity(id)}
                    variant="info"
                  >
                    -
                  </Button>
                  {quantity}
                  <Button
                    onClick={() => increaseItemQuantity(id)}
                    variant="info"
                  >
                    +
                  </Button>
                </div>
                <Button onClick={() => removeItemFromCart(id)} variant="danger">
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
