//* internal imports
const Users = require("../Models/users");

const getUsersController = async (req, res) => {
  try {
    const data = await Users.find({});
    if (req.decoded) {
      res.status(200).json({
        result: data,
        message: "Success",
      });
    }
  } catch (err) {
    console.log(err);
    // res.status(500).json({
    //   message: "Something went wrong",
    // });
  }
};

module.exports = {
  getUsersController,
};
