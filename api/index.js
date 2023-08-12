require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.error("failed to connect to the database: ", err);
  });

require("./models/product.model");

const router = require("./routes/route");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
