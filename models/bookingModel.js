const mongoose = require("mongoose");
const coachSchema = new mongoose.Schema({
  row: {
    type: Number,
    required: [true, "a row must have some seat"],
    unique: true,
  },
  start: {
    type: Number,
    default: 0,
    required: [true, "tell the start"],
  },
  Available: {
    type: Number,
    default: 7,
    required: [true, "tell if seat available"],
  },
  seat: {
    type: Array,
    default: [0, 0, 0, 0, 0, 0, 0],
    required: [true, " seat in array "],
  },
});
const row = mongoose.model("row", coachSchema);
module.exports = row;
