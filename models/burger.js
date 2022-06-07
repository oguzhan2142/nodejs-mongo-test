const express = require("express");
const mongoose = require("mongoose");

const burgerSchema = new mongoose.Schema({
  name: String,
  price: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Burgers", burgerSchema);
