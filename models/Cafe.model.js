const mongoose = require("mongoose");

const cafeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default:
      "https://n1s1.hsmedia.ru/1e/96/d9/1e96d950aa96c869306772418d6bd3dd/800x533_0xac120003_21070923221615817336.jpg",
  },
  phone: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  mail: String,
  password: String,
  role: {
    type: String,
    default: "cafe"
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food"
    }
  ]
});

const Cafe = mongoose.model("Cafe", cafeSchema);

module.exports = Cafe;
