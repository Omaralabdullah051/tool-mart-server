//* internal imports
const Parts = require("../Models/parts");

const postPartsController = async (req, res) => {
  try {
    console.log(req.body);
    const newParts = await Parts(req.body);
    await newParts.save();
    res.status(200).json({ message: "Product posted successfully" });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = {
  postPartsController,
};
