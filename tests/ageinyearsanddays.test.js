const dateUtils = require('../utils-module/calculatedates')

test('Check age of Marlon Brando in Years and Days', () => {
    const dob = new Date('1924-04-03')
    const dod = new Date('2004-07-01')
    
    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("80 years and 89 days old")
})

test('Check age of Richard Attenborough in Years and Days', () => {
    const dob = new Date('1923-08-29')
    const dod = new Date('2014-08-24')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("90 years and 360 days old")
})

test('Check age of Paul Newman in Years and Days', () => {
    const dob = new Date('1925-01-26')
    const dod = new Date('2008-09-26')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("83 years and 244 days old")
})

test('Check age of person who died on their birthday', () => {
    const dob = new Date('1930-08-29')
    const dod = new Date('2010-08-29')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("80 years old")
})

test('Check age of person who died on the day after their birthday', () => {
    const dob = new Date('1930-08-29')
    const dod = new Date('2010-08-30')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("80 years and 1 day old")
})

test('Check age of person who died at 1 year old', () => {
    const dob = new Date('1930-08-29')
    const dod = new Date('1931-08-29')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("1 year old")
})

test('Check age of person who died at 1 year and 1 day old', () => {
    const dob = new Date('1930-08-29')
    const dod = new Date('1931-08-30')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("1 year and 1 day old")
})

test('Check age of person who died at 5 days old', () => {
    const dob = new Date('1930-08-01')
    const dod = new Date('1930-08-06')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("5 days old")
})

test('Check age of person who died at 1 day old', () => {
    const dob = new Date('1930-08-01')
    const dod = new Date('1930-08-02')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("1 day old")
})

test('Check age of person who died at 1 year and 3 days old', () => {
    const dob = new Date('1930-08-01')
    const dod = new Date('1931-08-04')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("1 year and 3 days old")
})

test('Check age of person who died at birth', () => {
    const dob = new Date('1930-08-01')
    const dod = new Date('1930-08-01')

    expect(dateUtils.calculateAgeInYearsAndDays(dob,dod)).toBe("No Age")
})

test('Check age of person who is alive', () => {
    const dob = new Date('1930-08-01')
    const today = new Date()
    
    expect(dateUtils.calculateAgeInYearsAndDays(dob)).toBe(dateUtils.calculateAgeInYearsAndDays(dob,today))
})

test('Check age of person who is alive', () => {
    const dob = new Date('1982-07-21')
    const today = new Date()
    
    expect(dateUtils.calculateAgeInYearsAndDays(dob)).toBe(dateUtils.calculateAgeInYearsAndDays(dob,today))
})

test('Check age of person who is alive', () => {
    const dob = new Date()

    expect(dateUtils.calculateAgeInYearsAndDays(dob)).toBe("No Age")
})
