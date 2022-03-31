const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    foodId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }],
    cafeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cafe'
    },
    total: Number
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order;