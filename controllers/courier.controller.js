const Courier = require("../models/Courier.model");

module.exports.courierController = {
  getAllCouriers: async (req, res) => {
    try {
      const responce = await Courier.find();
      res.status(200).json(responce);
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  },
  editCourier: async (req, res) => {
    const { name, phone, mail, address } = req.body;
    try {
      const editedCourier = await Courier.findByIdAndUpdate(req.params.id, {
        name,
        phone,
        mail,
        address
      });
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  deleteCourier: async (req, res) => {
    try {
      await Courier.findByIdAndDelete(req.params.id);
      res.status(200).json("Клиент удален");
    } catch (e) {
      res.json({ error: e.toString() });
    }
  },
  signUpCourier: async (req, res) => {
    const { password, name, phone, mail, address } = req.body;
    const hash = await bcrypt.hash(password, Number(BCRYPT_ROUNDS));
    try {
      await Courier.create({
        password: hash,
        name,
        phone,
        mail,
        address
      });
      res.status(200).json("Клиент создан");
    } catch (e) {
      res.status(400).json({ error: e.toString() });
    }
  }
};
