const Cafe = require('../models/Cafe.model')

module.exports.cafeController = {
    getAllCafe: async (req, res) => {
        try {
            const responce = await Cafe.find()
            res.status(200).json(responce)
        } catch (e) {
            res.status(400).json({error: e.toString()})
        }
    },
    createCafe: async (req, res) => {
        try{
            const {name, menu, phone, mail, adress} = req.body
            await Cafe.create({
                name,
                menu,
                phone,
                mail,
                adress
            })
            res.status(200).json('Кафе создано')
        } catch(e) {
            res.status(400).json({error: e.toString()})
        }
    },
    deleteCafe: async (req, res) => {
        try{
            await Cafe.findByIdAndRemove(req.params.id)
            res.status(200).json('Кафе удалено')
        } catch(e) {
            res.status(400).json({error: e.toString()})
        }
    }
}