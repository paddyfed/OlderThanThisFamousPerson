const ageUtils = require('../utils-module/ageutilities')

const moreCelebrities = [
    {
        "name": "David Attenborough",
        "ageDiffWithUser": 5755

    },
    {
        "name": "Richard Attenborough",
        "ageDiffWithUser": 4050
    },    
    {
        "name": "Al Pacino",
        "ageDiffWithUser": 652
    },
    {
        "name": "Robert Duvall",
        "ageDiffWithUser": 4050
    },
    {
        "name": "James Caan",
        "ageDiffWithUser": 682
    },
    {
        "name": "Diane Keaton",
        "ageDiffWithUser": 1429
    },
    {
        "name": "Robert De Niro",
        "ageDiffWithUser": 557
    },
    {
        "name": "Paul Newman",
        "ageDiffWithUser": 1250
    },
    {
        "name": "Robert Redford",
        "ageDiffWithUser":  1998
    },
    {
        "name": "Michael Jackson",
        "ageDiffWithUser": 10746
    },
    {
        "name": "Tom Hanks",
        "ageDiffWithUser": 5267
    }
]

test('Close in age to Marlon Brando', () => {
    expect(ageUtils.findCelebritiesCloseInAge(29309, moreCelebrities,5))
        .toEqual(expect.arrayContaining([
            expect.objectContaining({
                "name": "Robert De Niro"
            }),
            expect.objectContaining({
                "name": "Al Pacino"
            }),
            expect.objectContaining({
                "name": "James Caan"
            }),
            expect.objectContaining({
                "name": "Paul Newman"
            }),
            expect.objectContaining({
                "name": "Diane Keaton"
            })
        ]))
})

test('Close in age to Marlon Brando', () => {
    expect(ageUtils.findCelebritiesCloseInAge(29309, moreCelebrities))
    .toEqual(expect.arrayContaining([
        expect.objectContaining({
            "name": "David Attenborough"
        }),
        expect.objectContaining({
            "name": "Richard Attenborough"
        }),
        expect.objectContaining({
            "name": "Al Pacino"
        }),
        expect.objectContaining({
            "name": "Robert Duvall"
        }),
        expect.objectContaining({
            "name": "James Caan"
        }),
        expect.objectContaining({
            "name": "Diane Keaton"
        }),
        expect.objectContaining({
            "name": "Robert De Niro"
        }),
        expect.objectContaining({
            "name": "Paul Newman"
        }),
        expect.objectContaining({
            "name": "Robert Redford"
        }),
        expect.objectContaining({
            "name": "Michael Jackson"
        }),
        expect.objectContaining({
            "name": "Tom Hanks"
        })
    ]))
    
    expect(ageUtils.findCelebritiesCloseInAge(29309, moreCelebrities).length).toEqual(11)
})

test('Check age difference between Marlon Brando and Al Pacino', () => {
    expect(ageUtils.calcualteAgeDifference(29309,29961)).toBe(652)
})

test('Check age difference between Marlon Brando and Robert DeNero', () => {
    expect(ageUtils.calcualteAgeDifference(29309,28752)).toBe(557)
})

test('Check age difference between Marlon Brando and James Caan', () => {
    expect(ageUtils.calcualteAgeDifference(29309,29991)).toBe(682)
})