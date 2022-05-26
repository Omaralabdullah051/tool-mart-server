//* internal imports
const Parts = require("../Models/parts");

const deletePartsController = async (req, res) => {
  try {
    await Parts.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error",
    });
  }
};

module.exports = {
  deletePartsController,
};
