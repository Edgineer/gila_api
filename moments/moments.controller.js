const express = require('express');
const router = express.Router();
const momentService = require('./moment.service');

// routes

router.post('/register', register);
router.get('/', getAll);		//	FOR TESTING
router.get('/:username', getByUsername);		//get all moments for specific user
router.get('/:username/:date', getByDate);		//get moment for specific user by date, use to get current/next/previous/random moment

module.exports = router;

function register(req, res, next) {
    momentService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {			//FOR TESTING
    momentService.getAll()
        .then(moments => res.json(moments))
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