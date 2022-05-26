//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { getPartsController } = require("../controller/partsController");
const { postPartsController } = require("../controller/postPartsController");
const {
  singlePartsController,
} = require("../controller/singlePartsController");
const Parts = require("../Models/parts");

router.get("/parts", getPartsController);

router.get("/getparts/:id", singlePartsController);

router.post("/postpart", postPartsController);

module.exports = router;
