const Food = require("../models/Food.model");

module.exports.foodController = {
  getAllFood: async (req, res) => {
    try {
      const allFood = await Food.find();
      res.status(200).json(allFood);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  getFoodByCafeId: async (req, res) => {
    const { cafeId } = req.body;
    try {
      const foodByCafeId = await Food.findById(req.body.id);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  createFood: async (req, res) => {
    const { name, image, info, category, price } = req.body;
    try {
      await Food.create({
        name,
        image,
        info,
        category,
        price
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
  }
};
