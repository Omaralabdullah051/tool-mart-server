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
const {
  getAllOrderController,
} = require("../controller/getAllOrderController");
const { putOrderController } = require("../controller/putOrderController");
const verifyAdmin = require("../middlewares/admin/verifyAdmin");
const paymentController = require("../controller/paymentController");
const { putOrderController2 } = require("../controller/putOrderController2");

router.post("/post", postOrderController);

router.get("/get", verifyJWT, getOrderController);

router.get("/getall", verifyJWT, getAllOrderController);

router.get("/getorders/:id", singleOrdersController);

router.put("/put", verifyJWT, verifyAdmin, putOrderController);

router.delete("/delete", deleteOrderController);

router.post("/create-payment-intent", verifyJWT, paymentController);

router.put("/putagain/:id", putOrderController2);

module.exports = router;
