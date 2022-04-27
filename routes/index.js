const express = require('express')
const router = express.Router()
const dateUtils = require('../utils-module/calculatedates')

router.get('/', (req, res) => {
    let yourage
    if(req.query.yourdateofbirth != null && req.query.yourdateofbirth != ''){
        yourage = dateUtils.calculateCelebrityAge(Date.parse(req.query.yourdateofbirth))
    }
    res.render('index', { yourDetails: req.query, yourAge: yourage })
})

module.exports = router