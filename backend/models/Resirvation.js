const mongoose = require('mongoose')

const ResirvationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    stade: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Resirvation',ResirvationSchema)