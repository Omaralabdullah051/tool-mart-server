//* external imports
const express = require("express");

const router = express.Router();

//* internal imports
const { userController } = require("../controller/userController");
const adminController = require("../controller/adminController");

const Users = require("../Models/users");
const verifyJWT = require("../middlewares/jwt/verifyJwt");
const verifyAdmin = require("../middlewares/admin/verifyAdmin");
const { getUsersController } = require("../controller/getUsersController");
const { putUserController } = require("../controller/putUserController");

router.put("/add/:email", userController);

router.get("/admin/:email", adminController);

router.get("/getall", verifyJWT, verifyAdmin, getUsersController);

router.put("/put/:email", verifyJWT, verifyAdmin, putUserController);

module.exports = router;
