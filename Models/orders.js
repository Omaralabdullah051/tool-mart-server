//* external imports
const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: function (v) {
        return /^\S+@\S+\.\S+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    validate: {
      validator: function (v) {
        return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(v);
      },
      message: (props) => `${props.value} is not a valid BD number`,
    },
  },
  toolName: {
    type: String,
    required: [true, "Tool name is required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
});

const Orders = mongoose.model("Order", orderSchema);

module.exports = Orders;
