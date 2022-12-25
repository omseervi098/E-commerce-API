const express = require("express");
const router = express.Router();
router.use("/products", require("./products"));
router.get("/", (req, res) => {
  res.send("Api is Up and Running");
});
module.exports = router;
