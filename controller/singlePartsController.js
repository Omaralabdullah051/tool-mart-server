//* internal imports
const Parts = require("../Models/parts");

const singlePartsController = async (req, res) => {
  try {
    const data = await Parts.find({ _id: req.params.id });
    res.status(200).json({
      result: data,
      message: "success",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error",
    });
  }
};

module.exports = {
  singlePartsController,
};
