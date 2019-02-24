const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
	username: { type: String, required: true }, 		
    text: {type: String, required: true},	//length taken care of in UI
    createdDate: { type: Date, default: Date.now },
    emoji: {type: Number, min: 0, max: 4}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Moment', schema);