import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../redux/movies/movieSlice";
import { addFavorites } from "../redux/movies/favoritesSlice";

interface Movies {
  title: string;
  opening_crawl: string;
  release_date: string;
  img?: string;
  episode_id: number;
}

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
    <div className="App">
      <button
        className="add__button"
        onClick={() => setShowFavorites(!showFavorites)}
      >
        Show Favorites
      </button>

      {showFavorites
        ? favoriteMovies.map((favorite: any, id: any) => {
            return (
              <div key={id}>
                <Movie
                  poster={favorite?.poster}
                  title={favorite.title}
                  crawl={favorite.crawl}
                />
              </div>
            );
          })
        : movies.map((movie: Movies, idx: number) => {
            return (
              <div key={idx}>
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
    </div>
  );
};

export default Home;
