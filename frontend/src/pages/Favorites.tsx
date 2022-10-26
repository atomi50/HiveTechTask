import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FavoriteMovies from "../components/FavoriteMovies";
import { getFavorites } from "../redux/movies/favoritesSlice";
import { Star } from "react-bootstrap-icons";

export const Favorites = () => {
  const favoriteMovies = useSelector(getFavorites);

  return (
    <Container className="d-flex justify-content-center">
      <Row md={2} xs={1} lg={3}>
        {favoriteMovies.length !== 0 ? (
          favoriteMovies.map((favorite: any, id: number) => {
            return (
              <div key={id}>
                <Col>
                  <FavoriteMovies
                    id={favorite.id}
                    poster={favorite.poster}
                    title={favorite.title}
                    date={favorite.date}
                    crawl={favorite.crawl}
                    producer={favorite.producer}
                    director={favorite.director}
                  />
                </Col>
              </div>
            );
          })
        ) : (
          <div>
            <h1 className="text-nowrap fs-3">
              You don't have any favorites...yet
            </h1>
            <Star
              style={{
                fontSize: "80px",
                transform: `translate(160px, 10px)`,
              }}
            />
          </div>
        )}
      </Row>
    </Container>
  );
};
