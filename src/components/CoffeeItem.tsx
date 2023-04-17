import { Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import styles from "../styles/CoffeeItem.module.css";

type CoffeeItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export function CoffeeItem({ name, description, price }: CoffeeItemProps) {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className={`pt-3 pb-3 rounded ${styles.stack}`}
    >
      <span className="fs-5">{name}</span>
      <div className="ms-auto">
        <span className="text-muted">{description}</span>
        <span className="ms-5 fs-5">{formatCurrency(price)}</span>
      </div>
    </Stack>
  );
}
