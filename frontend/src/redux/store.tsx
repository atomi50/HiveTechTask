import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlice";
import favoritesReducer from "./movies/favoritesSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
