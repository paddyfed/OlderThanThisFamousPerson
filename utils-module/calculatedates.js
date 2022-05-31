const dateUtils = require('../utils-module/calculatedates')

exports.calculateCelebrityAge = function (dateOfBirth, dateOfDeath = null) {
    if(dateOfDeath === null) {
        dateOfDeath = new Date()
    }

    if (dateOfDeath !== null && dateOfBirth !== null) {
        // dateOfBirth = new Date(dateOfBirth)
        // dateOfDeath = new Date(dateOfDeath)
        dateOfBirth.setUTCHours(0,0,0,0)
        dateOfDeath.setUTCHours(0,0,0,0)
        return (dateOfDeath - dateOfBirth) / 1000 / 60 / 60 / 24
    }

    return null
}

exports.calculateAgeInYearsAndDays = function (dateOfBirth, dateOfDeath = null) {
    if (dateOfDeath === null) {
        dateOfDeath = new Date()
    }
    dateOfDeath.setUTCHours(0, 0, 0, 0)

    const intermediateDate = new Date(dateOfDeath)

    if (hasBirthdayPassed(dateOfBirth, dateOfDeath) === false) {
        intermediateDate.setFullYear(dateOfDeath.getFullYear() - 1)
    }
    intermediateDate.setDate(dateOfBirth.getDate())
    intermediateDate.setMonth(dateOfBirth.getMonth())

    const days = dateUtils.calculateCelebrityAge(intermediateDate, dateOfDeath)
    const years = intermediateDate.getFullYear() - dateOfBirth.getFullYear()

    return formatAgeInYearsAndDays(years, days)
}

function hasBirthdayPassed(dob, dod) {
    // if your birth month is greater than your death month then the birthday has not passed yet
    if (dob.getMonth() > dod.getMonth()) {
        return false
    }

    if (dob.getMonth() < dod.getMonth()) {
        return true
    }

    if (dob.getDate() > dod.getDate() && dob.getMonth() == dod.getMonth()) {
        return false
    }

    if (dob.getDate() < dod.getDate() && dob.getMonth() == dod.getMonth()) {
        return true
    }
    return true
}

function formatAgeInYearsAndDays(years, days) {
    if (years > 1 && days > 1) {
        return `${years} years and ${days} days old`
    }

    if (years > 1 && days == 1) {
        return `${years} years and ${days} day old`
    }

    if (years > 1 && days == 0) {
        return `${years} years old`
    }

    if (years == 1 && days > 1) {
        return `${years} year and ${days} days old`
    }

    if (years == 1 && days == 1) {
        return `${years} year and ${days} day old`
    }

    if (years == 1 && days == 0) {
        return `${years} year old`
    }

    if (years == 0 && days > 1) {
        return `${days} days old`
    }

    if (years == 0 && days == 1) {
        return `${days} day old`
    }

    // if we get here then there is no age recorded
    return 'No Age'
}