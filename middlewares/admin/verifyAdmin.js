const Users = require("../../Models/users");

const verifyAdmin = async (req, res, next) => {
  try {
    const user = await Users.findOne({
      email: req.decoded.email,
    });
    if (user.role === "admin") {
      next();
    } else {
      return res.status(403).send({ message: "forbidden" });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = verifyAdmin;
