const olderThanUtils = require('../utils-module/olderthan')
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
const userAgeInDays = 20

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
//     expect(olderThanUtils.findOlderCelebrities(userDob,celebrities)).toContain("Kyle")
// })

test('Find 1 celebrities older than the user', () => {
    expect(olderThanUtils.findOlderCelebrities(userAgeInDays, celebrities,1))
        .toEqual(expect.arrayContaining([
            expect.objectContaining({
                "name": "John"
            }),
            expect.not.objectContaining({
                "name": "Kyle"
            })
        ]))
})

test('Find 3 celebrities older than the user', () => {
    expect(olderThanUtils.findOlderCelebrities(userAgeInDays, celebrities,3))
        .toEqual(expect.arrayContaining([
            expect.objectContaining({
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
            expect.not.objectContaining({
                "name": "Stephen"
            })
        ]))
})

test('find all celebrities older than the user', () => {
    expect(olderThanUtils.findOlderCelebrities(30000,moreCelebrities).length).toEqual(5)
})

test('Find 20 celebrities when there are not 20 celebrities in the list', () => {
    expect(olderThanUtils.findOlderCelebrities(30000,moreCelebrities,20).length).toEqual(5)
})
