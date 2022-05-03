exports.findYoungerCelebrities = function (userAgeInDays, listOfCelebrities, numberOfMatches, daysOlderThan = 30) {
    let returnedCelebrities = []
    let i = 0

    listOfCelebrities.sort(function (a, b) {
        return b.ageInDays - a.ageInDays
    })
    
    listOfCelebrities.forEach(celebrity => {
        if (celebrity.ageInDays < userAgeInDays) {
            returnedCelebrities.push(celebrity)
        }
    })

    if (numberOfMatches) {
        // if we want to restrict the number of results then Slice 
        // will return the first X number of results from the Celebrities array
        return returnedCelebrities.slice(0, numberOfMatches)
    }
    else {
        return returnedCelebrities
    }
}