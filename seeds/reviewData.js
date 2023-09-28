const { Review } = require("../models");

const reviewdata = [
  {
    rating: "7",
    review: "Very blue",
    movie_id: "Twilight",
  },
  {
    rating: "9",
    review: "Great Movie",
    movie_id: "Cars",
  },
  {
    rating: "10",
    review: "Wow",
    movie_id: "Shrek 2",
  },
  {
    rating: "8",
    review: "Lots of fighting",
    movie_id: "Fight Club",
  },
];

const seedReview = () => Review.bulkCreate(reviewdata);

module.exports = seedReview;
