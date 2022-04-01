const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  foodId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
  total: Number,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
