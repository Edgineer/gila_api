const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    createdDate: { type: Date, default: Date.now },
    resetString: {type: String, required:true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);