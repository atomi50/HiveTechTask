const mongoose = require("mongoose");

const favoritesSchema = mongoose.Schema(
  {
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorites", favoritesSchema);
