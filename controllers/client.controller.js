const Client = require('../models/Client.model')

module.exports.clientController = {
    getAllClients: async (req, res) => {
        try {
            const responce = await Client.find()
            res.status(200).json(responce)
        } catch (e) {
            res.status(400).json({ error: e.toString() })
        }
    },
    createClient: async (req, res) => {
        try{
            const {name, phone, mail, adress} = req.body
            await Client.create({
                name,
                phone,
                mail,
                adress
            })
            res.status(200).json('Клиент создан')
        } catch(e) {
            res.status(400).json({error: e.toString()})
        }
    },
    deleteClient: async (req, res) => {
        try {
            await Client.findByIdAndDelete(req.params.id)
            res.status(200).json('Клиент удален')
        } catch(e) {
            res.status(400).json({error: e.toString()})
        }
    }
}