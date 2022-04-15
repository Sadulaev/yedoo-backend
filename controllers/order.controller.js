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
      const { foodId, cafeId, total, from, to } = req.body;
      await Order.create({
        foodId,
        cafeId,
        total,
        from,
        to
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
  getOrderById: async (req, res) => {
    try {
      const oneOrder = await Order.findById(req.params.id);
      res.status(200).json(oneOrder);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  acceptOrder: async (req, res) => {
    const courierId = req.user.cafeId;
    try {
      const editedOrder = await Order.findByIdAndUpdate(req.params.id, {
        courierId,
        status: "atCourier"
      });
      res.json(editedOrder);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  }
};
