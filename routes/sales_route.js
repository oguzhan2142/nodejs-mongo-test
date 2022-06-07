const express = require("express");

const sales = require("../models/sales");

const router = express.Router();

router.get("/all", async (req, res) => {
  const models = await sales.find().limit(5);

  res.json(models);
});


module.exports = router;