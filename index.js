const express = require("express");
const app = express();
const db = require("./config/mongoose");
const config = require("dotenv").config(); //to hide secret key
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));
app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
