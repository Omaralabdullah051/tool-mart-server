//* external imports
const express = require("express");
const {
  deletePartsController,
} = require("../controller/deletePartsController");

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

router.delete("/deletepart/:id", deletePartsController);

module.exports = router;
