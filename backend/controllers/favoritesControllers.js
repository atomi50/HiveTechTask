const asyncHandler = require("express-async-handler");
const Favorites = require("../models/favoritesModel");

// Get favorites
// GET /api/favorites
const getFavorites = asyncHandler(async (req, res) => {
  const favorites = await Favorites.find();
  res.status(200).json(favorites);
});

//Create favorites
// POST api/favorites
const createFavorites = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const favorite = await Favorites.create({
    text: req.body.text,
  });
  res.status(200).json(favorite);
});

// Update Favorites
// POST api/favorites/:id
const updateFavorites = asyncHandler(async (req, res) => {
  const favorite = await Favorites.findById(req.params.id);

  if (!favorite) {
    res.status(400);
    throw new Error("Favorite not found");
  }

  const updatedFavorite = await Favorites.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedFavorite);
});

// Delete Favorites
// DELETE api/favorites/:id
const deleteFavorites = asyncHandler(async (req, res) => {
  const favorite = await Favorites.findById(req.params.id);

  if (!favorite) {
    res.status(400);
    throw new Error("Favorite not found");
  }

  await favorite.remove();

  res.status(200).json({
    message: `Deleted the favorite ${req.params.id}`,
  });
});

module.exports = {
  getFavorites,
  createFavorites,
  updateFavorites,
  deleteFavorites,
};
