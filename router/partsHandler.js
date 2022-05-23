//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { getPartsController } = require("../controller/partsController");
const Parts = require("../Models/parts");

router.get("/parts", getPartsController);

router.post("/post", (req, res) => {
  console.log(req.body);
  const newParts = new Parts(req.body);
  newParts.save((err) => {
    if (err) {
      res.status(500).json({
        error: "There was a server side error",
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted successfully",
      });
    }
  });
});

module.exports = router;
