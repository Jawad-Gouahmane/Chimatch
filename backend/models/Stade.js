const mongoose = require('mongoose')

const StadeSchema = mongoose.Schema({
  
    stade: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Stade',StadeSchema)