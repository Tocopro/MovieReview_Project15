const router = require("express").Router();
const Review = require("../models/Review");

// route to get all dishes
/* 
router.get("/", async (req, res) => {
  const reviewData = await Review.findAll().catch((err) => {
    res.json(err);
  });
  const reviews = reviewData.map((review) => review.get({ plain: true }));
  res.render("all", { reviews });
});
*/

module.exports = router;
