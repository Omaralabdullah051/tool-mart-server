//* internal imports
const Orders = require("../Models/orders");

//* Mongoose error handler function
const handleMongooseErrors = (err) => {
  console.log(err.message);
  let errors = { name: "", email: "", address: "", phone: "" };

  if (err.message.includes("Order validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const postOrderController = async (req, res) => {
  console.log(req.body);
  try {
    const newOrders = new Orders(req.body);
    await newOrders.save();
    res.status(200).json({ message: "Successfully Ordered" });
  } catch (err) {
    const errors = handleMongooseErrors(err);
    res.status(500).json({ error: errors });
  }
};

module.exports = {
  postOrderController,
};
