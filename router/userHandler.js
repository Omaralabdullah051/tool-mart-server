//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { userController } = require("../controller/userController");
const adminController = require("../controller/adminController");

const Users = require("../Models/users");

router.put("/add/:email", userController);

router.get("/admin/:email", adminController);

module.exports = router;
