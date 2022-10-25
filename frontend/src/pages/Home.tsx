import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { useDispatch } from "react-redux";
import { addMovies } from "../redux/movies/movieSlice";
import { Container, Row } from "react-bootstrap";

type Movies = {
  title: string;
  opening_crawl: string;
  release_date: string;
  poster: string;
  episode_id: number;
  img: string;
  producer: string;
  director: string;
};

const Home = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    axios.get("/movies").then((response) => {
      dispatch(addMovies(response.data));
      return setMovies(response.data);
    });
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      <Row md={2} xs={1} lg={3}>
        {movies.map((movie: Movies, id: number) => {
          return (
            <div key={id}>
              <Movie
                poster={movie.img}
                title={movie.title}
                crawl={movie.opening_crawl}
                date={movie.release_date}
                id={movie.episode_id}
                producer={movie.producer}
                director={movie.director}
              />
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
