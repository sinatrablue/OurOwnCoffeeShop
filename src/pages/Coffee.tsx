import { Row } from "react-bootstrap";
import coffeeMenuItems from "../data/coffee_items.json";
import { CoffeeItem } from "../components/CoffeeItem";

export function Coffee() {
  return (
    <>
      <h1 className="mb-5">Coffee</h1>
      <Row className="g-3">
        {coffeeMenuItems.map((item) => (
          <CoffeeItem {...item} />
        ))}
      </Row>
    </>
  );
}
