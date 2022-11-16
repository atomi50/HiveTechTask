const express = require("express");
const router = express.Router();
const {
  getFavorites,
  createFavorites,
  updateFavorites,
  deleteFavorites,
} = require("../controllers/favoritesControllers");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getFavorites).post(protect, createFavorites); // shorter syntax because of the same route

// router.get("/", getFavorites);

// router.post("/", createFavorites);

router
  .route("/:id")
  .put(protect, updateFavorites)
  .delete(protect, deleteFavorites);

module.exports = router;
