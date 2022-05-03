const express = require('express')
const router = express.Router()
const dateUtils = require('../utils-module/calculatedates')
const ageUtils = require('../utils-module/ageutilities')
const Celebrity = require('../models/celebrity')

router.get('/', async (req, res) => {
    let yourage
    if (req.query.yourdateofbirth != null && req.query.yourdateofbirth != '') {
        yourage = dateUtils.calculateCelebrityAge(Date.parse(req.query.yourdateofbirth))
    }

    try {
        const celebrities = await Celebrity.find()
        celebrities.forEach(celebrity => {
            celebrity.ageInDays = dateUtils.calculateCelebrityAge(celebrity.dateOfBirth, celebrity.dateOfDeath)
        })

        const olderCelebrities = ageUtils.findOlderCelebrities(yourage,celebrities,5)
        const youngerCelebrities = ageUtils.findYoungerCelebrities(yourage,celebrities,5)
        const sameAgeCelebrities = ageUtils.findSameAgeCelebrities(yourage,celebrities)

        res.render('index', { yourDetails: req.query, yourAge: yourage, olderCelebrities: olderCelebrities, youngerCelebrities: youngerCelebrities, sameAgeCelebrities: sameAgeCelebrities })
    } catch (error) {
        res.render('/')
    }
})

module.exports = router