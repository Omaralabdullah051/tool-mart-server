//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { orderController } = require("../controller/orderController");

const Orders = require("../Models/orders");

router.post("/post", orderController);

module.exports = router;
