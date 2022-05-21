//* external imports
const createError = require("http-errors");

//* Not found handler
const notFoundHandler = (req, res, next) => {
  next(createError(404, "Content is not found"));
};

//* Default error handler
const errorHander = (err, req, res, next) => {
  if (res.headerSent) {
    next(err);
  } else {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  notFoundHandler,
  errorHander,
};
