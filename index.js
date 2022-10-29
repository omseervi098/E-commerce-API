const express = require("express");
const app = express();
const db = require("./config/mongoose");
app.use(express.urlencoded({ extended: true }));
app.use("/", require("./routes"));
const port = 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
