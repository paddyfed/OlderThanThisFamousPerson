exports.findSameAgeCelebrities = function (userAgeInDays, listOfCelebrities, numberOfMatches) {
    return findCelebrities(userAgeInDays, listOfCelebrities, numberOfMatches, "SameAge")
}

exports.findOlderCelebrities = function (userAgeInDays, listOfCelebrities, numberOfMatches) {
    return findCelebrities(userAgeInDays, listOfCelebrities, numberOfMatches, "Older")
}

exports.findYoungerCelebrities = function (userAgeInDays, listOfCelebrities, numberOfMatches) {
    return findCelebrities(userAgeInDays, listOfCelebrities, numberOfMatches, "Younger")
}

function findCelebrities(userAgeInDays, listOfCelebrities, numberOfMatches, searchOption) {
    let returnedCelebrities = []

    const younger = () => {
        listOfCelebrities.sort(function (a, b) {
            return b.ageInDays - a.ageInDays
        })

        listOfCelebrities.forEach(celebrity => {
            if (celebrity.ageInDays < userAgeInDays) {
                returnedCelebrities.push(celebrity)
            }
        })
    }

    const older = () => {
        listOfCelebrities.sort(function (a, b) {
            return a.ageInDays - b.ageInDays
        })

        listOfCelebrities.forEach(celebrity => {
            if (celebrity.ageInDays > userAgeInDays) {
                returnedCelebrities.push(celebrity)
            }
        })
    }

    const sameAge = () => {
        listOfCelebrities.sort(function (a, b) {
            return b.ageInDays - a.ageInDays
        })

        listOfCelebrities.forEach(celebrity => {
            if (celebrity.ageInDays == userAgeInDays) {
                returnedCelebrities.push(celebrity)
            }
        })
    }

    const handleOption = {
        'Younger': younger,
        'Older': older,
        'SameAge': sameAge
    }

    handleOption[searchOption]()

    if (numberOfMatches) {
        // if we want to restrict the number of results then Slice 
        // will return the first X number of results from the Celebrities array
        return returnedCelebrities.slice(0, numberOfMatches)
    }
    else {
        return returnedCelebrities
    }
}