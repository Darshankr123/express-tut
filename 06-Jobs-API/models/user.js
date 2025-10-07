const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const UserSchema = {
  name: {
    type: String,
    required: [true, "pls provide the name"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "pls provide the email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ,
      "pls provide the valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "pls provide the password"],
    minLength: 6,
    // maxLength: 12,
  },
};

// UserSchema.pre("save", async function (next) {
//   const slat = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, slat);
//   next();
// });

module.exports = mongoose.model("User", UserSchema);
