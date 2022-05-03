const express = require('express')
const router = express.Router()
const dateUtils = require('../utils-module/calculatedates')
const olderThanUtils = require('../utils-module/olderthan')
const youngerThanUtils = require('../utils-module/youngerthan')
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

        const olderCelebrities = olderThanUtils.findOlderCelebrities(yourage,celebrities,20)
        const youngerCelebrities = youngerThanUtils.findYoungerCelebrities(yourage,celebrities,20)

        res.render('index', { yourDetails: req.query, yourAge: yourage, olderCelebrities: olderCelebrities, youngerCelebrities: youngerCelebrities })
    } catch (error) {
        res.render('/')
    }
})

module.exports = router