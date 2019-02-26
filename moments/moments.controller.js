const express = require('express');
const router = express.Router();
const momentService = require('./moment.service');

// routes

router.post('/createMoment', createMoment);
router.get('/', getAll);        //  FOR TESTING
router.get('/:username', getByUsername);        //gets all moments for specific user, starting with most recent moment
router.get('/random/:username', getRandomMoment);   //get a random moment for a specific user     
router.get('/:username/:date', getByDate);      //get moment for specific user by date, use to get current/next/previous/random moment

module.exports = router;

function createMoment(req, res, next) {
    momentService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {           //FOR TESTING
    momentService.getAll()
        .then(moments => res.json(moments))
        .catch(err => next(err));
}

function getRandomMoment(req, res, next) {           
    momentService.getRandomMoment(req.params.username)
        .then(moment => moment ? res.json(moment) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByUsername(req, res, next) {
    momentService.getByUsername(req.params.username)
        .then(moment => moment ? res.json(moment) : res.sendStatus(404))
        .catch(err => next(err));
}

function getByDate(req, res, next) {
    momentService.getByDate(req.params)
        .then(moment => moment ? res.json(moment) : res.sendStatus(404))
        .catch(err => next(err));
}