//* internal imports
const Parts = require("../Models/parts");

const getPartsController = async (req, res) => {
  try {
    const data = await Parts.find({});
    res.status(200).json({
      result: data,
      message: "Success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  getPartsController,
};
