//*external imports
const jwt = require("jsonwebtoken");
require("dotenv").config();

//* internal imports
const Users = require("../Models/users");

const userController = async (req, res) => {
  try {
    const email = req.params.email;
    const user = req.body;
    await Users.updateOne(
      { email: email },
      {
        $set: user,
      },
      { upsert: true }
    );
    const token = jwt.sign({ email: email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: process.env.JWT_EXPIRY,
    });
    res.status(200).json({
      message: "Successs",
      token,
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server side error",
    });
  }
};
module.exports = {
  userController,
};
