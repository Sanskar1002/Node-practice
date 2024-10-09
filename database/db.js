const mongoose = require("mongoose");

const mongoUrl = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connection successful");
});

db.on("error", (err) => {
  console.log("connection error :", err);
});

db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

module.exports = db;
