const express = require("express");
// db connection
const db = require("./database/db");
const app = express();
app.use(express.json());

// worker routes
const workerRoutes = require("./routes/workerRoutes");
app.use("/worker", workerRoutes);

app.listen(3000, () => {
  console.log("listening on port : 3000");
});
