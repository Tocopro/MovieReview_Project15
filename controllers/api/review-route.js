const router = require("express").Router();
const Review = require("../../models/Review");

// route to create/add a review
router.post("/", async (req, res) => {
  try {
    const reviewData = await Review.create({
      rating: req.body.rating,
      review: req.body.review,
      movie_id: req.body.movie_id,
    });
    // if the dish is successfully created, the new response will be returned as json
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
