const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity')
const dateUtils = require('../utils-module/calculatedates')

// all celebrities route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name != '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const celebrities = await Celebrity.find(searchOptions)
        res.render('celebrities/index', { celebrities: celebrities, searchOptions: req.query })

    } catch (error) {
        res.redirect('/')
    }
})

// new celebrity route
router.get('/new', (req, res) => {
    res.render('celebrities/new', { celebrity: new Celebrity() })
})

// create author route
router.post('/', async (req, res) => {
    const celebrity = new Celebrity({
        name: req.body.name,
        dateOfBirth: req.body.dateofbirth,
        dateOfDeath: req.body.dateofdeath
    })

    const routeValue = req.body.submitvalue

    try {
        const newCelebrity = await celebrity.save()
        if (routeValue == 'Create') {
            res.redirect(`celebrities/${newCelebrity.id}`)
        }
        else {
            res.redirect('celebrities/new')
        }

    } catch (error) {
        res.render('celebrities/new', {
            celebrity: celebrity,
            errorMessage: 'Error creating Celebrity'
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const celebrity = await Celebrity.findById(req.params.id)
        const ageInDays = dateUtils.calculateCelebrityAge(celebrity.dateOfBirth, celebrity.dateOfDeath)
        celebrity.ageInDays = ageInDays
        res.render('celebrities/view', { celebrity: celebrity })
    } catch (error) {
        res.redirect('/')
    }
})

// edit celebrity route
router.get('/:id/edit', async (req, res) => {
    try {
        const celebrity = await Celebrity.findById(req.params.id)
        res.render('celebrities/edit', { celebrity: celebrity })

    } catch (error) {
        res.redirect('/celebrities')
    }
})

router.put('/:id', async (req, res) => {
    let celebrity

    try {
        celebrity = await Celebrity.findById(req.params.id)
        celebrity.name = req.body.name
        celebrity.dateOfBirth = req.body.dateofbirth
        celebrity.dateOfDeath = req.body.dateofdeath
        await celebrity.save()
        res.redirect(`/celebrities/${celebrity.id}`)
    } catch (error) {
        if (celebrity == null) {
            res.redirect('/')
        } else {
            res.render('celebrities/edit', {
                celebrity: celebrity,
                errorMessage: 'Error updating author'
            })
        }
    }
})

router.delete('/:id', async (req, res) => {
    let celebrity

    try {
        celebrity = await Celebrity.findById(req.params.id)
        await celebrity.remove()
        res.redirect('/celebrities')
    } catch (error) {
        if (celebrity == null) {
            res.redirect('/')
        } else {
            res.redirect(`celebrities/${celebrity.id}`)
        }
    }
})

module.exports = router