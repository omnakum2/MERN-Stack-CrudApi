const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const categoryRoutes = require('./routers/Category');
const productRoutes = require('./routers/Product');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecom");

app.listen(3001, () => {
  console.log("local server running on port 3001");
});

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
