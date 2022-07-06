const mongoose = require('mongoose')
const dateUtils = require('../utils-module/calculatedates')
const ageUtils = require('../utils-module/ageutilities')


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

celebritySchema.virtual('ageInDays').get(function() {
    return dateUtils.calculateCelebrityAge(this.dateOfBirth, this.dateOfDeath)
})

celebritySchema.virtual('ageInYearsAndDays').get(function() {
    return dateUtils.calculateAgeInYearsAndDays(this.dateOfBirth, this.dateOfDeath)
})

celebritySchema.virtual('ageDiffWithUser').get(function() {
    return ageUtils.calcualteAgeDifference(12, this.ageInDays)
})

celebritySchema.virtual('events', {
    ref: 'SignificantEvent',
    localField: '_id',
    foreignField: 'celebrity'
})

module.exports = mongoose.model('Celebrity', celebritySchema)