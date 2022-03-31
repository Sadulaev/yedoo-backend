const Cafe = require("../models/Cafe.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.cafeController = {
  getAllCafe: async (req, res) => {
    try {
      const res = await Cafe.find();
      res.status(200).json(res);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  // createCafe: async (req, res) => {
  //     try{
  //         const {name, menu, phone, mail, adress} = req.body
  //         await Cafe.create({
  //             name,
  //             menu,
  //             phone,
  //             mail,
  //             adress
  //         })
  //         res.status(200).json('Кафе создано')
  //     } catch(e) {
  //         res.status(400).json({error: e.toString()})
  //     }
  // },
  deleteCafe: async (req, res) => {
    try {
      await Cafe.findByIdAndRemove(req.params.id);
      res.status(200).json("Кафе удалено");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  getOneCafeById: async (req, res) => {
    try {
      const oneCafe = Cafe.find(req.params.id);
      res.status(200).json(oneCafe);
    } catch (e) {
      res.status(404).json({ error: e.toString() });
    }
  },
  signUp: async (req, res) => {
    const { login, password, name, menu, phone, mail, adress } = req.body;
    const hash = await bcrypt.hash(password, Number(BCRYPT_ROUNDS));
    try {
      await Cafe.create({
        login,
        password: hash,
        name,
        menu,
        phone,
        mail,
        adress
      });
      res.status(200).json("Кафе создано");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  }
};
