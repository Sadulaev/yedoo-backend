const Cafe = require("../models/Cafe.model");
const Courier = require("../models/Courier.model");
const Client = require("../models/Client.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.cafeController = {
  getAllCafe: async (req, res) => {
    try {
      const allCafe = await Cafe.find();
      res.status(200).json(allCafe);
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
  signUpCafe: async (req, res) => {
    const { password, name, menu, phone, mail, adress } = req.body;
    const hash = await bcrypt.hash(password, Number(BCRYPT_ROUNDS));
    try {
      await Cafe.create({
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
  },
  signIn: async (req, res) => {
    const { mail, password, role } = req.body;
    try {
      if (role === "cafe") {
        const candidate = await Cafe.findOne({ mail });
      }
      if (role === "courier") {
        const candidate = await Cafe.findOne({ mail });
      }
      if (role === "client") {
        const candidate = await Cafe.findOne({ mail });
      }

      if (!candidate) {
        return res
          .status(401)
          .json({ error: "Неверные логин или пароль (логин)" });
      }
      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res
          .status(401)
          .json({ error: "Неверные логин или пароль (пароль)" });
      }
      const payload = {
        cafeId: candidate._id,
        role: candidate.role
      };
      token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "14d"
      });
      res.json({ token });
    } catch (e) {
      res.json({ error: e.toString() });
    }
  }
};
