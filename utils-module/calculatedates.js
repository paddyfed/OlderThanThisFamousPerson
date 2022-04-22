exports.calculateCelebrityAge = function (dateOfDeath, dateOfBirth) {
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)

    if (dateOfDeath) {
        return (dateOfDeath - dateOfBirth) / 1000 / 60 / 60 / 24
    }
    else {
        return (today - dateOfBirth) / 1000 / 60 / 60 / 24
    }
}