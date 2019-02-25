const db = require('_helpers/db');
const Moment = db.Moment;

module.exports = {
    getAll,     //  FOR TESTING
    getByUsername,
    getByDate,      
    create
};

async function getAll() {       //  FOR TESTING
    return await Moment.find();
}

async function getByUsername(username_param) {
    return await Moment.find({ username: username_param });
}

async function getByDate(param) {       //use this to get current/previous/next/random momemnt
    const date1 = new Date(param.date);
    const date2 = new Date(param.date);
    date2.setDate(date2.getDate()+1);

    return await Moment.find(
        { username: param.username, createdDate : {"$gte": date1, "$lt": date2}} );
}

async function create(momentParam) {
    const moment = new Moment(momentParam);
    await moment.save();
}

