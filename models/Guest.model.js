const mongoose = require('mongoose');

const guestSchema = mongoose.Schema({
    role: guest
})

const Guest = mongoose.model('Guest', guestSchema)

module.exports = Guest