const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default:
      "https://www.ixbt.com/img/n1/news/2021/9/5/d5d11c91b095686fcaa0f14cf8bbb7fa-600x450_large.jpg",
  },
  info: String,
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    reqiured: true,
  },
  cafeId: {
    type: mongoose.Types.ObjectId,
    ref: 'Food'
  }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
