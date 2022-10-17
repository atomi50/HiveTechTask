import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getAllMovies } from "../redux/movies/movieSlice";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import { useFilms } from "../hooks/useFilm";
import "./MovieDetails.css";

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

  const links = result.map((response: any) => {
    return response.characters;
  });

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
    <div>
      {result.map((movie: any, idx: any) => {
        return id.moviesId == movie.episode_id ? (
          <div key={idx}>
            <Movie
              poster={movie.img}
              title={movie.title}
              crawl={movie.opening_crawl}
              date={movie.release_date}
              producer={movie.producer}
              director={movie.director}
              characters={movie.characters}
            />
            <h1 style={{ fontSize: 25 }}>Featured Characters: </h1>
            {characters.map((character, idx: any) => (
              <div key={idx}>
                <h2 className="movie__characters" key={idx}>
                  {character.name}
                </h2>
              </div>
            ))}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default MovieDetail;
