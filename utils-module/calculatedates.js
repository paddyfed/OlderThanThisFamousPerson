exports.calculateCelebrityAge = function (dateOfBirth, dateOfDeath = null) {
    const today = new Date()
    today.setUTCHours(0, 0, 0, 0)

    if (dateOfDeath && dateOfBirth) {
        return (dateOfDeath - dateOfBirth) / 1000 / 60 / 60 / 24
    }

    if(dateOfBirth) {
        return (today - dateOfBirth) / 1000 / 60 / 60 / 24
    }

    return null
}