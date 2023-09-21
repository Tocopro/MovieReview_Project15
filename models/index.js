const Movie = require("./Movie");
const Review = require("./Review");
const User = require("./User");

Movie.hasMany(Review, {
  foreignKey: "movie_id",
  onDelete: "CASCADE",
});

User.hasMany(Review, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { Movie, Review, User };
