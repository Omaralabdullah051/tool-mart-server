//* external imports
const createError = require("http-errors");

//* Mongoose error handler
const handleMongooseErrors = (err, req, res, next) => {
  if (res.headerSent) {
    next(err);
  } else {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  handleMongooseErrors,
};
