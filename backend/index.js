
require("dotenv").config();
const { dbConnect } = require("./config/config");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
dbConnect();



const message = require("./routes/message");
const resirvation = require("./routes/resirvation");
const stade = require("./routes/stade");



app.use("/api/message", message);
app.use("/api/resirvation", resirvation);
app.use("/api/stade", stade);




app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
module.exports = app;
