//* external imports
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

//* internal imports

//* app initialization
const app = express();

//* enable contact with dotenv file
dotenv.config();

//* define port
const port = process.env.PORT || 5000;

//* default API
app.get("/", (req, res) => {
  res.send("Hello!programmers");
});

//* server start
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
