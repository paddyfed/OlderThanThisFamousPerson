const mongoose = require('mongoose')

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Celebrity', celebritySchema)