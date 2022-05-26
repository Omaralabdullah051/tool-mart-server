//* internal imports
const Reviews = require("../Models/reviews");

const getReviewController = async (req, res) => {
  try {
    const data = await Reviews.find({});
    res.status(200).json({
      result: data,
      message: "Success",
    });
  } catch (err) {
    console.log(err);
    // res.status(500).json({
    //   message: "Something went wrong",
    // });
  }
};

module.exports = {
  getReviewController,
};
