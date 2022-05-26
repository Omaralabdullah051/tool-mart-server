//* external imports
const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    trim: true,
  },
});

const Reviews = mongoose.model("Review", reviewSchema);

module.exports = Reviews;
