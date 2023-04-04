import { Button, Card, Col } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import AddToCartImage from "../images/add-to-cart.svg";

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
  const quantity = 0;
  return (
    <Card className="h-100" style={{ "flex-direction": "row" }}>
      <Card.Img
        variant="left"
        src={imgUrl}
        width="30%"
        // style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text className="d-flex justify-content-between">
          <Col className="col-10">{description}</Col>
          <Col>
            <div className="mt-auto">
              {quantity === 0 ? (
                <Button style={{ height: "3rem", width: "3rem" }}>
                  <img src={AddToCartImage} alt="ADD_TO_CART"></img>
                </Button>
              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    +/-
                  </div>
                  Remove
                </div>
              )}
            </div>
          </Col>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
