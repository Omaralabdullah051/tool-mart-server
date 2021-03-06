//* internal imports
const Orders = require("../Models/orders");

const getOrderController = async (req, res) => {
  try {
    const email = req.query.email;
    console.log(email);
    const data = await Orders.find({ email });
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
  getOrderController,
};
