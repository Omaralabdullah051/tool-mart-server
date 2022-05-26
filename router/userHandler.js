//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { userController } = require("../controller/userController");

const Users = require("../Models/users");

router.put("/add/:email", userController);

module.exports = router;
