//* internal imports
const Users = require("../Models/users");

const putUserController = async (req, res) => {
  try {
    const email = req.params.email;
    const role = req.body;
    console.log(email);
    await Users.updateOne(
      { email: email },
      {
        $set: role,
      },
      { upsert: true }
    );

    res.status(200).json({
      message: "Successs",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "There was a server side error",
    });
  }
};
module.exports = {
  putUserController,
};
