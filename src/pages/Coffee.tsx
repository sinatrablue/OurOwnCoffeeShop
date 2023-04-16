import { Button, Row } from "react-bootstrap";
import coffeeMenuItems from "../data/coffee_items.json";
import { CoffeeItem } from "../components/CoffeeItem";
import { Link } from "react-router-dom";

export function Coffee() {
  return (
    <>
      <h1 className="mb-5">
        <div className="d-flex justify-content-between">
          Coffee
          <Link to={"./policy"}>
            <Button variant="outline-secondary">
              <span>Our coffee policy</span>
            </Button>
          </Link>
        </div>
      </h1>
      <Row className="g-3">
        {coffeeMenuItems.map((item) => (
          <CoffeeItem {...item} />
        ))}
      </Row>
    </>
  );
}
