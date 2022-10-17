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
      state.favorites.push({ ...action.payload });
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites.map((favorite: any) => favorite))
      );
    },
  },
});

export const { addFavorites } = favoritesSlice.actions;
export const getFavorites = (state: any) => state.favorites.favorites;
export default favoritesSlice.reducer;
