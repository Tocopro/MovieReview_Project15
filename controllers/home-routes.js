const router = require("express").Router();
const Review = require("../models/Review");

// route to get all reviews
router.get("/", async (req, res) => {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
  });
  const reviews = reviewData.map((review) => review.get({ plain: true }));
  res.render("all", { reviews });
});

// route to get review by id
router.get("/:id", async (req, res) => {
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
