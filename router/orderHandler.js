//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { postOrderController } = require("../controller/orderController");
const { getOrderController } = require("../controller/getOrderController");
const {
  deleteOrderController,
} = require("../controller/deleteOrderController");

const Orders = require("../Models/orders");
const {
  singleOrdersController,
} = require("../controller/singleOrdersController");
const verifyJWT = require("../middlewares/jwt/verifyJwt");

router.post("/post", postOrderController);

router.get("/get", verifyJWT, getOrderController);

router.get("/getorders/:id", singleOrdersController);

router.delete("/delete", deleteOrderController);

module.exports = router;
