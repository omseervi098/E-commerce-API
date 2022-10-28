const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { error } = require("console");
const config = dotenv.config();
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.once("error", (error) => console.log("Error Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

module.exports = db;
