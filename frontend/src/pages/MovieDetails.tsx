import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getAllMovies } from "../redux/movies/movieSlice";
import { useParams } from "react-router-dom";
import { useFilms } from "../hooks/useFilm";
import { Col, Container, Row, Stack } from "react-bootstrap";
import MovieDetails from "../components/MovieDetail";
import { FeaturedCharacters } from "../components/FeaturedCharacters";

interface Film {
  characters: string[];
}
const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

const MovieDetail = () => {
  const id = useParams();
  const result = useSelector(getAllMovies);
  const [data, setData] = useState<Film>();
  const { characters } = useFilms(data); // this one

  const getCharacterData = useCallback(async () => {
    try {
      const response = await api.get(`/films/${id.moviesId}`);
      setData(response.data);
    } catch {}
  }, [id]);

  useEffect(() => {
    getCharacterData();
  }, [getCharacterData]);

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row md={2} xs={1} lg={3}>
          {result.map((movie: any, idx: any) => {
            return id.moviesId == movie.episode_id ? (
              <div key={idx}>
                <MovieDetails
                  poster={movie.img}
                  title={movie.title}
                  crawl={movie.opening_crawl}
                  date={movie.release_date}
                  producer={movie.producer}
                  director={movie.director}
                  characters={movie.characters}
                />
              </div>
            ) : null;
          })}
        </Row>
      </Container>
      <Container className="d-flex flex-column align-items-center ">
        <h1 style={{ fontSize: 25, fontStyle: "italic" }}>
          Featured Characters
        </h1>
        <Row lg={4}>
          {characters.map((character, idx: any) => (
            <div key={idx}>
              <Col>
                <FeaturedCharacters name={character.name} />
              </Col>
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MovieDetail;
