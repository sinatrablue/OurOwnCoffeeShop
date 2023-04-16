import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartImage from "../images/cart.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

/**
 * @tutorial as NavLink makes Nav.Link from react-bootstrap act like NavLink from react-router
 *
 * @returns
 */
export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavBarBs sticky="top" className="bg-white shadow-sm mb-4">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/coffee" as={NavLink}>
            Coffee
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <img src={CartImage} alt="CART"></img>
            <div
              className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(30%, 30%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavBarBs>
  );
}
