const mongoose = require('mongoose')

const cafeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    menu: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }],
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

const Cafe = mongoose.model('Cafe', cafeSchema)

module.exports = Cafe;