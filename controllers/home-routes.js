const router = require("express").Router();
const Review = require("../models/Review");

// route to get all reviews
router.get("/", async (req, res) => {
  try {
    const reviewData = await Review.findAll();

    const reviews = reviewData.map((review) => review.get({ plain: true }));
    res.render("homepage", { reviews, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route to get review by id
router.get("/review/:id", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const reviewData = await Review.findByPk(req.params.id);
      if (!reviewData) {
        res.status(404).json({ message: "No review with this id!" });
        return;
      }
      const review = reviewData.get({ plain: true });
      res.render("homepage", { review, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Review route
router.get("/addreview", (req, res) => {
  res.render("addreview", { loggedIn: req.session.loggedIn });
});
module.exports = router;
