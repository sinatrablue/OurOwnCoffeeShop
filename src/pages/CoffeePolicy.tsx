import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReturnIcon from "../images/return.svg";

export function CoffeePolicy() {
  return (
    <>
      <Button
        variant="outline-secondary"
        className="rounded-circle"
        style={{ width: "4rem", height: "4rem" }}
      >
        <Link to={"../coffee"}>
          <img src={ReturnIcon} alt="RETURN" />
        </Link>
      </Button>
      <h1 className="mt-5">The way we see coffee</h1>
      <div>Proper selection, ethical, made with love...</div>
    </>
  );
}
