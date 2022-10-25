import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../redux/movies/movieSlice";
import { addFavorites } from "../redux/movies/favoritesSlice";
import { Button, Col, Container, Row } from "react-bootstrap";

type Movies = {
  title: string;
  opening_crawl: string;
  release_date: string;
  img?: string;
  episode_id: number;
};

const Home = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState<any>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const favoriteMovies = useSelector((state: any) => state.favorites.favorites);

  useEffect(() => {
    axios.get("/movies").then((response) => {
      dispatch(addMovies(response.data));
      return setMovies(response.data);
    });
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      <div className="App">
        <Button onClick={() => setShowFavorites(!showFavorites)}>
          Show Favorites
        </Button>
        <Row md={2} xs={1} lg={3}>
          {showFavorites
            ? favoriteMovies.map((favorite: Movies, id: number) => {
                return (
                  <div key={id}>
                    <Col>
                      <Movie
                        poster={favorite.img}
                        title={favorite.title}
                        date={favorite.release_date}
                        crawl={favorite.opening_crawl}
                      />
                    </Col>
                  </div>
                );
              })
            : movies.map((movie: Movies, id: number) => {
                return (
                  <div key={id}>
                    <Movie
                      poster={movie.img}
                      title={movie.title}
                      crawl={movie.opening_crawl}
                      date={movie.release_date}
                      id={movie.episode_id}
                    />
                  </div>
                );
              })}
        </Row>
      </div>
    </Container>
  );
};

export default Home;
