const express = require("express");
const mongoose = require("mongoose");
const app = express();
const parser = require("body-parser");
const pw = "8i9nwqBRMGwVyoKw";
const uri =
  "mongodb+srv://oguzhan2142:8i9nwqBRMGwVyoKw@cluster0.ltayj.mongodb.net/sample_supplies?retryWrites=true&w=majority";

// routes
const burgerRoute = require("./routes/burger_route");
const salesRoute = require("./routes/sales_route");

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(parser.json());
app.use("/burger", burgerRoute);
app.use("/sales", salesRoute);

try {
  mongoose.connect(uri);
} catch (error) {
  console.log(error);
}
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
