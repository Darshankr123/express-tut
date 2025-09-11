const mongoose = require("mongoose");

const connectionString = "";

function connectToDb(url) {
  return mongoose.connect(url);
}

module.exports = connectToDb;
