const mongoose = require("mongoose");
mongoose.connect("process.env.MONGODB_URL");
const db = mongoose.connection;
db.once("error", (error) => console.log("Error Connecting to Database"));
db.once("open", () => console.log("Connected to Database"));

module.exports = db;
