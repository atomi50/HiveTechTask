import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarBS className="bg-dark shadow-lg mb-3 sticky-top">
      <Container>
        <Nav className="ms-auto">
          <Nav.Link className="text-white" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white" to="/favorites" as={NavLink}>
            Favorites
          </Nav.Link>
          <Nav.Link className="text-white">Search</Nav.Link>
        </Nav>
      </Container>
    </NavbarBS>
  );
};
