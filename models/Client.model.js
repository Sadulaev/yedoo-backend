const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    mail: String,
    adress: {
        type: String,
        required: true
    },
    
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client;