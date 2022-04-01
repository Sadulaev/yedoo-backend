const Order = require("../models/Order.model");

module.exports.orderController = {
  getOrder: async (req, res) => {
    try {
      const responce = await Order.find();
      res.status(200).json(responce);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  createOrder: async (req, res) => {
    try {
      const { clientId, foodId, cafeId, total } = req.body;
      await Order.create({
        clientId,
        foodId,
        cafeId,
        total,
      });
      res.status(200).json("Заказ создан");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  deleteOrder: async (req, res) => {
    try {
      await Order.findByIdAndDelete(req.params.id);
      res.status(200).json("Заказ удален");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
};
