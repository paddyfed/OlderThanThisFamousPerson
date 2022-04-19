const mongoose = require('mongoose')

const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    dateOfDeath: {
        type: Date
    }
})

module.exports = mongoose.model('Celebrity', celebritySchema)