const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, required: true, index: { unique: false }},
    text: { type: String, required: true, maxlength: 240},			//allows for 240 characters
    emoji: { type: String, required: true },
	createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Moment', schema);