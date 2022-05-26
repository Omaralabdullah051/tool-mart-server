const Users = require("../Models/users");

const adminController = async (req, res) => {
  const email = req.params.email;
  const user = await Users.findOne({ email: email });
  const isAdmin = user.role === "admin";
  res.send({ admin: isAdmin });
};

module.exports = adminController;
