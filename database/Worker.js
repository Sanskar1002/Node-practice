const mongoose = require("mongoose");
const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  position: {
    type: String,
    enum: ["manager", "waiter", "boss", "receptionist"],
  },
  salary: String,
});

const Worker = mongoose.model("workers", workerSchema);

module.exports = Worker;
