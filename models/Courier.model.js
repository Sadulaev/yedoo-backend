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
  adress: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "courier"
  },
  password: String
});

const Courier = mongoose.model("Courier", clientSchema);

module.exports = Courier;
