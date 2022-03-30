const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: String,
    info: String,
    category: {
        type: String,
        required: true,
        default: 'https://m.media-amazon.com/images/I/41-IFltEa7L._SX355_.jpg'
    },
    price: {
        type: Number,
        reqiured: true
    }
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food;