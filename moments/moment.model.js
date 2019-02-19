const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now }
    //more stuff
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Moment', schema);