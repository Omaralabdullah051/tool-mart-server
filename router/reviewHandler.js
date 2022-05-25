//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { postReviewController } = require("../controller/postReviewController");

const Reviews = require("../Models/reviews");

router.post("/post", postReviewController);

module.exports = router;
