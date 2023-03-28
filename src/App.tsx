/* contains all the routes and the containers of the app */
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Coffee } from "./pages/Coffee";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/coffee" element={<Coffee />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
