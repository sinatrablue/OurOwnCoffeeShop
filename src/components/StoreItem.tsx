import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

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
  return (
    <Card style={{ "flex-direction": "row" }}>
      <Card.Img
        variant="left"
        src={imgUrl}
        width="50%"
        // style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
