//* internal imports
const Orders = require("../Models/orders");

const getAllOrderController = async (req, res) => {
  try {
    const data = await Orders.find({});
    if (req.decoded) {
      res.status(200).json({
        result: data,
        message: "Success",
      });
    }
  } catch (err) {
    console.log(err);
    // res.status(500).json({
    //   message: "Something went wrong",
    // });
  }
};

module.exports = {
  getAllOrderController,
};
