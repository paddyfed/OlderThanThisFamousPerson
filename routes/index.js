const express = require('express')
const router = express.Router()
const dateUtils = require('../utils-module/calculatedates')
const ageUtils = require('../utils-module/ageutilities')
const Celebrity = require('../models/celebrity')

const options = { year: 'numeric', month: '2-digit', day: '2-digit' }

router.get('/', async (req, res) => {
    let yourage
    let yourDateOfBirth
    if (req.query.yourdateofbirth != null && req.query.yourdateofbirth != '') {
        yourage = dateUtils.calculateCelebrityAge(Date.parse(req.query.yourdateofbirth))
        yourDateOfBirth = new Date(req.query.yourdateofbirth).toLocaleDateString(undefined,options)
    }

    try {
        const celebrities = await Celebrity.find()
        celebrities.forEach(celebrity => {
            celebrity.ageInDays = dateUtils.calculateCelebrityAge(celebrity.dateOfBirth, celebrity.dateOfDeath)
            celebrity.ageDiffWithUser = ageUtils.calcualteAgeDifference(yourage,celebrity.ageInDays)
        })

        const olderCelebrities = ageUtils.findOlderCelebrities(yourage,celebrities,5)
        const youngerCelebrities = ageUtils.findYoungerCelebrities(yourage,celebrities,5)
        const sameAgeCelebrities = ageUtils.findSameAgeCelebrities(yourage,celebrities)
        const closeAgeWithCelebrities = ageUtils.findCelebritiesCloseInAge(yourage,celebrities,5)

        res.render('index', { yourDetails: req.query, yourAge: yourage, yourDateOfBirth: yourDateOfBirth, olderCelebrities: olderCelebrities, youngerCelebrities: youngerCelebrities, sameAgeCelebrities: sameAgeCelebrities, closeAgeWithCelebrities: closeAgeWithCelebrities })
    } catch (error) {
        res.render('/')
    }
})

module.exports = router