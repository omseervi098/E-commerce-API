const dotenv = require("dotenv");
const config = dotenv.config();
const mongoose = require("mongoose");
const url = process.env.MONGODB_URL;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, connectionParams);
const db = mongoose.connection;
db.once("error", (error) => console.log("Error Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

module.exports = db;
