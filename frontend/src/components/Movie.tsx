import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFavorites } from "../redux/movies/favoritesSlice";

import "./Movie.css";

interface Movie {
  poster?: string;
  title?: string;
  crawl?: string;
  date?: string;
  id?: number;
  producer?: string;
  director?: string;
  characters?: [];
}

const Movie: React.FC<Movie> = ({
  poster,
  title,
  crawl,
  date,
  id,
  producer,
  director,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="movie__card">
      <img
        src={poster}
        alt="Movie Poster"
        onClick={() => {
          navigate(`/${id}`);
        }}
      />
      <div className="movie__description">
        <p>{title}</p>
        <span>{date}</span>
        <p> {crawl}</p>
        {id ? (
          <button
            onClick={() =>
              dispatch(addFavorites({ poster, title, date, crawl }))
            }
          >
            Add to favorites
          </button>
        ) : null}
        <div className={producer ? "movie__details" : "movie__details__hidden"}>
          <>
            <span>Producer:</span>
            <p>{producer}</p>
            <span>Director:</span>
            <p>{director}</p>
          </>
        </div>
      </div>
    </div>
  );
};

export default Movie;
