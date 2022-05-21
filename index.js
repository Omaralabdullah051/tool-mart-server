//* external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//* internal imports
const { notFoundHandler } = require("./middlewares/common/errorHandler");
const { errorHander } = require("./middlewares/common/errorHandler");

//* app initialization
const app = express();

//* enable contact with dotenv file
dotenv.config();

//* cors config
const corsConfig = {
  origin: true,
  credentials: true,
};

//* enable cors policy
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

//* request parser
app.use(express.json());

//* database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected through Mongoose"))
  .then((err) => console.log(err));

//* define port
const port = process.env.PORT || 5000;

//* default API
app.get("/", (req, res) => {
  res.send("Hello!programmers");
});

//* 404 not found handler
app.use(notFoundHandler);

//* Default error handler
app.use(errorHander);

//* server start
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
