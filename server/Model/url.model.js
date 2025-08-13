const mongoose = require("mongoose");
const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  click: {
    type: Number,
    default: 0,
  },
});

const Urlmodel = mongoose.model("Url", urlSchema);

module.exports = Urlmodel;
