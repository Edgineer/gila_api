const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString);
mongoose.Promise = global.Promise;//legacy code for promise

module.exports = {
    User: require('../users/user.model')
};