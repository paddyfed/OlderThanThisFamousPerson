const youngerThanUtils = require('../utils-module/ageutilities')
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

// test('Find 20 celebrities older than the user', () => {
//     expect(youngerThanUtils.findOlderCelebrities(userDob,celebrities)).toContain("Kyle")
// })

test('Find 1 celebrities younger than the user', () => {
    expect(youngerThanUtils.findYoungerCelebrities(userAgeInDays, celebrities,1))
        .toEqual(expect.arrayContaining([
            expect.objectContaining({
                "name": "Tony"
            }),
            expect.not.objectContaining({
                "name": "Stephen"
            }),
            expect.not.objectContaining({
                "name": "Jim"
            }),
            expect.not.objectContaining({
                "name": "Kyle"
            }),
            expect.not.objectContaining({
                "name": "John"
            })
        ]))
})

test('Find 3 celebrities younger than the user', () => {
    expect(youngerThanUtils.findYoungerCelebrities(userAgeInDays, celebrities,3))
        .toEqual(expect.arrayContaining([
            expect.not.objectContaining({
                "name": "Jim"
            }),
            expect.objectContaining({
                "name": "John"
            }),
            expect.objectContaining({
                "name": "Tony"
            }),
            expect.not.objectContaining({
                "name": "Kyle"
            }),
            expect.objectContaining({
                "name": "Stephen"
            })
        ]))
})

test('find all celebrities older than the user', () => {
    expect(youngerThanUtils.findYoungerCelebrities(30000,moreCelebrities).length).toEqual(7)
})

test('Find 20 celebrities when there are not 20 celebrities in the list', () => {
    expect(youngerThanUtils.findYoungerCelebrities(30000,moreCelebrities,20).length).toEqual(7)
})
