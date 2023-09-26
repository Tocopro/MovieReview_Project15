const router = require("express").Router();

const reviewRoutes = require("./review-route.js");
const userRoutes = require("./user-route.js");

router.use("/review", reviewRoutes);
router.use("/user", userRoutes);

module.exports = router;
