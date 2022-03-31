const Food = require("../models/Food.model");

module.exports.foodController = {
  getAllFood: async (req, res) => {
    try {
      const response = await Food.find();
      res.status(200).json(response);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  createFood: async (req, res) => {
    try {
      const { name, image, info, category, price } = req.body;
      await Food.create({
        name,
        image,
        info,
        category,
        price,
      });
      res.status(200).json("Еда создана");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  deleteFood: async (req, res) => {
    try {
      await Food.findByIdAndDelete(req.params.id);
      res.status(200).json("Корзина удалена");
    } catch {
      res.status(400).json({ error: e.toString() });
    }
  },
};
