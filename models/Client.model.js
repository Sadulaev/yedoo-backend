const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
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
  password: String,
  role: {
    type: String,
    default: "client"
  }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
