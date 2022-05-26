//* internal imports
const Orders = require("../Models/orders");

const putOrderController2 = async (req, res) => {
  try {
    const id = req.params.id;
    const payment = req.body;
    await Orders.updateOne(
      { _id: id },
      {
        $set: {
          paid: true,
          status: "Pending",
          transactionId: payment.transactionId,
        },
      },
      {
        upsert: true,
      }
    );
    res.status(200).json({
      message: "Successs",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error",
    });
  }
};
module.exports = {
  putOrderController2,
};
