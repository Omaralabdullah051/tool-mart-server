//*external imports
const jwt = require("jsonwebtoken");
require("dotenv").config();

//* internal imports
const Orders = require("../Models/orders");

const putOrderController = async (req, res) => {
  try {
    const id = req.query.id;
    const status = req.body;
    console.log(status);
    const result = await Orders.findByIdAndUpdate(
      { _id: id },
      {
        $set: status,
      },
      { upsert: true }
    );
    res.status(200).json({
      message: "Successs",
      result: result,
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error",
    });
  }
};
module.exports = {
  putOrderController,
};
