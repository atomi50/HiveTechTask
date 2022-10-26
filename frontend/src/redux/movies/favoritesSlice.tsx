import { createSlice } from "@reduxjs/toolkit";

const favorite =
  localStorage.getItem("favorites") !== null
    ? JSON.parse(localStorage.getItem("favorites")!)
    : [];

const initialState = {
  favorites: favorite,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state: any, action) => {
      const existingFavorite = state.favorites.find(
        (item: any) => item.id === action.payload.id
      );
      if (!existingFavorite) {
        state.favorites.push({ ...action.payload });
        localStorage.setItem(
          "favorites",
          JSON.stringify(state.favorites.map((favorite: any) => favorite))
        );
      } else return;
    },
    removeFromFavorites: (state: any, action) => {
      localStorage.setItem(
        "favorites",
        JSON.stringify(
          (state.favorites = state.favorites.filter(
            (favorite: any) => favorite.id !== action.payload
          ))
        )
      );
    },
  },
});

export const { addFavorites, removeFromFavorites } = favoritesSlice.actions;
export const getFavorites = (state: any) => state.favorites.favorites;

export default favoritesSlice.reducer;
