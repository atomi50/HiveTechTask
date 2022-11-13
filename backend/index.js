const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Fetch movies from the api
app.use("/api/movies", require("./routes/fetchedMovies"));

// Routes for favorites
app.use("/api/favorites", require("./routes/favoritesRoute"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
