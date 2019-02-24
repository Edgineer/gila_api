const express = require('express');
const router = express.Router();
const momentService = require('./moment.service');

// routes
router.post('/create', create);


module.exports = router;

//route implementations
function create(req, res, next) {
    momentService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}