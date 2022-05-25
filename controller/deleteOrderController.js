//* internal imports
const Orders = require("../Models/orders");

const deleteOrderController = async (req, res) => {
  try {
    await Orders.deleteOne({ _id: req.query.id });
    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error",
    });
  }
};

module.exports = {
  deleteOrderController,
};
