const express = require('express')
const router = express.Router()
const Celebrity = require('../models/celebrity')
const dateUtils = require('../utils-module/calculatedates')
const SignificantEvent = require('../models/significantevent')

// all events route
router.get('/', async (req, res) => {
    try {
        const significantevents = await SignificantEvent.find().populate('celebrity')
        res.render('significantevents/index', { significantevents: significantevents})        
    } catch (error) {
        res.redirect('/')
    }
})

// new events route
router.get('/new', (req, res) => {
    renderNewPage(res, new SignificantEvent())
})

// create event route
router.post('/', async (req, res) => {
    const significantevent = new SignificantEvent({
        event: req.body.event,
        eventDate: new Date(req.body.eventdate),
        celebrity: req.body.celebrity
    })

    const routeValue = req.body.submitvalue

    try {
        const newSignificantEvent = await significantevent.save()
        if (routeValue == 'Create') {
            res.redirect(`significantevents/${newSignificantEvent.id}`)
        }
        else {
            res.redirect('significantevents/new')
        }
    } catch (error) {
        renderNewPage(res, significantevent, true)
    }
})

async function renderNewPage(res, significantevent, hasError = false) {
    try {
        const celebrities = await Celebrity.find({})
        const params = {
            celebrities: celebrities,
            significantevent: significantevent
        }

        if (hasError) params.errorMessage = 'Error creating Event'
        res.render('significantevents/new',params)
    }
    catch(error) {
        console.log(error)
        res.redirect('/significantevents')
    }
}

router.get('/:id', async (req, res) => {
})

// edit event route
router.get('/:id/edit', async (req, res) => {
})

router.put('/:id', async (req, res) => {
})

// delete event route
router.delete('/:id', async (req, res) => {
})

module.exports = router