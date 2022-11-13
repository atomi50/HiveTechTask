const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", (req, res) => {
  axios
    .get("https://swapi.dev/api/films/")
    .then((response) => {
      const { results } = response.data;
      results.map((movie) => {
        const movieTitle = movie.title;
        switch (movieTitle) {
          case "A New Hope":
            movie.img =
              "https://m.media-amazon.com/images/I/91MMkv35K5L._RI_.jpg";
            break;
          case "The Empire Strikes Back":
            movie.img =
              "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg";
            break;
          case "Return of the Jedi":
            movie.img =
              "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
            break;
          case "The Phantom Menace":
            movie.img =
              "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";
            break;
          case "Attack of the Clones":
            movie.img =
              "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg";
            break;
          case "Revenge of the Sith":
            movie.img =
              "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg";
            break;
          default:
            console.log("Sorry, no movie found");
        }
      });
      res.status(200).send(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
