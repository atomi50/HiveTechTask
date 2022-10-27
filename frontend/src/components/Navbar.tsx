import { Button, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { StarFill } from "react-bootstrap-icons";
import { getFavorites } from "../redux/movies/favoritesSlice";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const favorites = useSelector(getFavorites);
  console.log(favorites.length);
  return (
    <NavbarBS className="bg-dark shadow-lg mb-3 sticky-top">
      <Container>
        <Nav className="ms-auto">
          <Nav.Link className="text-white mt-1" to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link className="text-white" to="/favorites" as={NavLink}>
            <Button
              style={{
                width: "2rem",
                height: "2rem",
                position: "relative",
                top: "5%",
              }}
              variant="dark"
              className="rounded-circle"
            >
              <StarFill
                style={{
                  position: "absolute",
                  top: "15%",
                  right: "15%",
                  fontSize: "20px",
                  color: "yellow",
                }}
              />
              {favorites.length > 0 ? (
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1rem",
                    height: "1rem",
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    transform: "translate(20%,20%)",
                  }}
                >
                  {favorites.length}
                </div>
              ) : null}
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBS>
  );
};
