import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import favoritesReducer from "./movies/favoritesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
  },
});
