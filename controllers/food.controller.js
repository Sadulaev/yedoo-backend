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
    const { name, image, info, categoryId, price } = req.body;
    try {
      const newFood = await Food.create({
        name,
        image,
        info,
        categoryId,
        price,
        cafeId: req.user.cafeId
      });
      res.status(200).json(newFood);
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

  //Получение еды по категории(без не обходимости не менять):
  getFoodByCategoryId: async (req, res) => {
    try {
      const foodByCategoryId = await Food.find({categoryId: req.params.id});
      res.json(foodByCategoryId)
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
};
