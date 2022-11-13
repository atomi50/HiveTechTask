const asyncHandler = require("express-async-handler");

// Get favorites
// GET /api/favorites
const getFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get the favorites",
  });
});

//Create favorites
// POST api/favorites
const createFavorites = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Favorite set" });
});

// Update Favorites
// POST api/favorites/:id
const updateFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update the favorite ${req.params.id}`,
  });
});

// Delete Favorites
// DELETE api/favorites/:id
const deleteFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete the favorite ${req.params.id}`,
  });
});

module.exports = {
  getFavorites,
  createFavorites,
  updateFavorites,
  deleteFavorites,
};
