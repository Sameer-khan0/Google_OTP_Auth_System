const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  userId: {type: String},
  otp: { type: String },
  createdAt: { type: Date },
  expireAt: { type: Date },
});

module.exports = mongoose.model("otp", otpSchema);
