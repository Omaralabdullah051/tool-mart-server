//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { getPartsController } = require("../controller/partsController");
const {
  singlePartsController,
} = require("../controller/singlePartsController");
const Parts = require("../Models/parts");

router.get("/parts", getPartsController);

router.get("/getparts/:id", singlePartsController);

module.exports = router;
