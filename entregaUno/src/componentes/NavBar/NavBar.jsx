import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/">
          <Navbar.Brand>MUELCOF</Navbar.Brand>
        </Link>

        <Nav className="text-center text-white">
          <NavLink to="/categoria/fem">Fragancias Femeninas</NavLink>
          <NavLink to="/categoria/masc">Fragrancias Masculinas</NavLink>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
