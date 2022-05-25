//* internal imports
const Orders = require("../Models/orders");

const singleOrdersController = async (req, res) => {
  try {
    const data = await Orders.find({ _id: req.params.id });
    console.log(req.params.id);
    console.log(data);
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
  singleOrdersController,
};
