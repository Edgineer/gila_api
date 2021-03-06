const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../users/user.service');
const momentService = require('../moments/moment.service');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register',
            '/moments/createMoment'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);
    if (!user) {
        return done(null, true);
    }
    done();
};