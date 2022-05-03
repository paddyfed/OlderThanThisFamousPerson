const sameAgeAsUtils = require('../utils-module/ageutilities')

const celebrities = [
    {
        "name": "Jim",
        "ageInDays": 23
    },
    {
        "name": "Kyle",
        "ageInDays": 24
    },
    {
        "name": "Richard",
        "ageInDays": 24
    },
    {
        "name": "Noel",
        "ageInDays": 24
    },
    {
        "name": "John",
        "ageInDays": 21
    },
    {
        "name": "Tony",
        "ageInDays": 22
    },
    {
        "name": "Stephen",
        "ageInDays": 20
    }
]
const userAgeInDays = 23

const moreCelebrities = [
    {
        "name": "David Attenborough",
        "ageInDays": 35056

    },
    {
        "name": "Richard Attenborough",
        "ageInDays": 33233
    },
    {
        "name": "Marlon Brando",
        "ageInDays": 29309
    },
    {
        "name": "Al Pacino",
        "ageInDays": 29953
    },
    {
        "name": "Robert Duvall",
        "ageInDays": 33351
    },
    {
        "name": "James Caan",
        "ageInDays": 29983
    },
    {
        "name": "Diane Keaton",
        "ageInDays": 27872
    },
    {
        "name": "Robert De Niro",
        "ageInDays": 28744
    },
    {
        "name": "Paul Newman",
        "ageInDays": 30559
    },
    {
        "name": "Robert Redford",
        "ageInDays": 31299
    },
    {
        "name": "Michael Jackson",
        "ageInDays": 18563
    },
    {
        "name": "Tom Hanks",
        "ageInDays": 24034
    }
]

test('Find 1 celebrities same age as the user', () => {
    expect(sameAgeAsUtils.findSameAgeCelebrities(userAgeInDays, celebrities,1))
        .toEqual(expect.arrayContaining([
            expect.objectContaining({
                "name": "Jim"
            })
        ]))
})

test('Find 3 celebrities same age as the user', () => {
    expect(sameAgeAsUtils.findSameAgeCelebrities(24, celebrities,3))
        .toEqual(expect.arrayContaining([
            expect.objectContaining({
                "name": "Kyle"
            }),
            expect.objectContaining({
                "name": "Noel"
            }),
            expect.objectContaining({
                "name": "Richard"
            })
        ]))
})


test('Find 1 celebrities same age as the user', () => {
    expect(sameAgeAsUtils.findSameAgeCelebrities(29953, moreCelebrities))
        .toEqual(expect.arrayContaining([
            expect.objectContaining({
                "name": "Al Pacino"
            })
        ]))
})

