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

// route to get all dishes
router.get("/", async (req, res) => {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
  });
  const reviews = reviewData.map((review) => review.get({ plain: true }));
  res.render("all", { reviews });
});

// route to get review by id
router.get("/review/:id", async (req, res) => {
  try {
    const reviewData = await Review.findByPk(req.params.id);
    if (!reviewData) {
      res.status(404).json({ message: "No review with this id!" });
      return;
    }
    const review = reviewData.get({ plain: true });
    res.render("review", review);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
