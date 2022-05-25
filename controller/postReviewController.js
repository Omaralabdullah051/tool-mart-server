//* internal imports
const Reviews = require("../Models/reviews");

//* Mongoose error handler function
const handleMongooseErrors = (err) => {
  console.log(err.message);
  let errors = {
    rating: "",
  };

  if (err.message.includes("Review validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const postReviewController = async (req, res) => {
  try {
    const newReviews = await Reviews(req.body);
    await newReviews.save();
    res.status(200).json({ message: "Review posted successfully" });
  } catch (err) {
    const errors = handleMongooseErrors(err);
    res.status(500).json({
      error: errors,
    });
  }
};

module.exports = {
  postReviewController,
};
