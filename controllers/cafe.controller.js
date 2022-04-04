const Cafe = require("../models/Cafe.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.cafeController = {
  getAllCafe: async (req, res) => {
    try {
      const allCafe = await Cafe.find();
      res.status(200).json(allCafe);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  deleteCafe: async (req, res) => {
    try {
      await Cafe.findByIdAndDelete(req.params.id);
      res.status(200).json("Кафе удалено");
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  getOneCafeById: async (req, res) => {
    try {
      const oneCafe = Cafe.find(req.params.id);
      res.status(200).json(oneCafe);
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  signUpCafe: async (req, res) => {
    const { name, phone, city, address, mail, password } = req.body;
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));
    try {
      await Cafe.create({
        name,
        phone,
        city,
        address,
        mail,
        password: hash
      });
      res.status(200).json("Кафе создано");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
};
