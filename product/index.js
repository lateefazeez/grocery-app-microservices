const express = require("express");
const app = express();

app.use(express.json());

app.use("/", (req, res, next) => {
  return res.status(200).json({ message: "Hello from Product" });
});

app.listen(8002, () => {
  console.log("Product Listening on Port 8002");
});
