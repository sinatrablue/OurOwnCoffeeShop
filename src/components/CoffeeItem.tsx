import { Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CoffeeItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export function CoffeeItem({ name, description, price }: CoffeeItemProps) {
  return (
    <Stack direction="horizontal" gap={3}>
      <span className="fs-5">{name}</span>
      <div className="ms-auto">
        <span className="text-muted">{description}</span>
        <span className="ms-5 fs-5">{formatCurrency(price)}</span>
      </div>
    </Stack>
  );
}
