const express = require("express");
const Burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("ok");
});

router.post("/add", async (req, res) => {
  const model = new Burger({
    name: req.body.name,
    price: req.body.price,
  });
  await model.save();
  res.json({ message: "saved" });
});

module.exports = router;
