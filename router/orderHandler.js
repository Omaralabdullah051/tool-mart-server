//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { postOrderController } = require("../controller/orderController");
const { getOrderController } = require("../controller/getOrderController");

const Orders = require("../Models/orders");

router.post("/post", postOrderController);

router.get("/get", getOrderController);

module.exports = router;
