const mongoose = require('mongoose')

const significantEventSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    celebrity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Celebrity',
        required: true
    }
})

module.exports = mongoose.model('SignificantEvent', significantEventSchema)