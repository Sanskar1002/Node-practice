const express = require("express");
const router = express.Router();
// workers modal
const Worker = require("../database/Worker");

// testing
router.get("/", (req, res) => {
  res.send("hii from server");
});

// list all workers data
router.get("/show", async (req, res) => {
  try {
    const response = await Worker.find();
    if (response.length != 0) {
      res.status(200).json(response);
    } else {
      res.status(200).json({
        response: "no data found",
      });
    }

    console.log("fetched successfully");
  } catch (error) {
    console.log(err);
    res.json({ error: "internal server error" });
  }
});

// show specific data
router.get("/show/:worktype", async (req, res) => {
  try {
    const worktype = req.params.worktype;
    const data = await Worker.find({ position: worktype });
    if (data.length != 0) {
      console.log("data found");
      res.status(200).json(data);
    } else {
      res.status(200).json({
        response: "no data found",
      });
    }
  } catch (error) {
    console.log(err);
    res.json({ error: "internal server error" });
  }
});

// add worker to db
router.post("/add", async (req, res) => {
  try {
    const worker = new Worker(req.body);
    let result = await worker.save();
    res.status(200).json(result);
    console.log("added to db");
  } catch (err) {
    console.log(err);
    res.json({ error: "internal server error" });
  }
});

// exporting the worker router
module.exports = router;
