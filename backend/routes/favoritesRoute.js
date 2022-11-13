const express = require("express");
const router = express.Router();
const {
  getFavorites,
  createFavorites,
  updateFavorites,
  deleteFavorites,
} = require("../controllers/favoritesControllers");

router.route("/").get(getFavorites).post(createFavorites); // shorter syntax because of the same route

// router.get("/", getFavorites);

// router.post("/", createFavorites);

router.route("/:id").put(updateFavorites).delete(deleteFavorites);

module.exports = router;
