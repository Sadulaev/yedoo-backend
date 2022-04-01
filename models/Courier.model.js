const mongoose = require("mongoose");

const courierSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  mail: String,
  address: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "courier"
  },
  password: String
});

const Courier = mongoose.model("Courier", courierSchema);

module.exports = Courier;
