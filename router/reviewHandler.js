//* external imports
const express = require("express");
const { getReviewController } = require("../controller/getReviewController");

const router = express.Router();

//* internal imports
const { postReviewController } = require("../controller/postReviewController");

const Reviews = require("../Models/reviews");

router.post("/post", postReviewController);

router.get("/get", getReviewController);

module.exports = router;
