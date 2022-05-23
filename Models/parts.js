//* external imports
const mongoose = require("mongoose");

const partsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  minimumOrderQuantity: {
    type: Number,
    required: true,
    trim: true,
  },
  availableQuantity: {
    type: Number,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
});

const Parts = mongoose.model("Part", partsSchema);

module.exports = Parts;
