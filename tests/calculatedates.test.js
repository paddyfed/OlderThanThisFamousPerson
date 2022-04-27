const dateUtils = require('../utils-module/calculatedates')

test('Check age of Marlon Brando', () => {
    const dob = new Date('1924-04-03')
    const dod = new Date('2004-07-01')
    expect(dateUtils.calculateCelebrityAge(dob,dod)).toBe(29309)
})

test('Check age of user', () => {
    const dob = new Date('01/01/2000')
    const dod = new Date()
    dod.setUTCHours(0, 0, 0, 0)
    const ageindays = (dod - dob) /1000/60/60/24
    expect(dateUtils.calculateCelebrityAge(dob,dod)).toBe(ageindays)
})

test('Check age of user when null is supplied', () => {
    const dob = new Date('01/01/2000')
    const dod = null
    const ageindays = (new Date().setUTCHours(0,0,0,0) - dob) /1000/60/60/24
    expect(dateUtils.calculateCelebrityAge(dob,dod)).toBe(ageindays)
})

test('Check age of user when only date of birth is supplied', () => {
    const dob = new Date('01/01/2000')    
    const ageindays = (new Date().setUTCHours(0,0,0,0) - dob) /1000/60/60/24
    expect(dateUtils.calculateCelebrityAge(dob)).toBe(ageindays)
})

test('Check if date of birth is null', () => {
    const dob = new Date('01/01/2000')    
    
    expect(dateUtils.calculateCelebrityAge(null,dob)).toBe(null)
    expect(dateUtils.calculateCelebrityAge(null)).toBe(null)

})