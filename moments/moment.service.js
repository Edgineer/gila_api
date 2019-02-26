const db = require('_helpers/db');
const Moment = db.Moment;

module.exports = {
    getAll,     //  FOR TESTING
    getByUsername,
    getRandomMoment,
    getByDate,      
    create
};

async function getAll() {       //  FOR TESTING
    return await Moment.find();
}

async function getByUsername(username_param) {
    return await Moment.find({ username: username_param }).sort('-date');

//Room.find({}).sort('-date')

    //return await Moment.find({ username: username_param }).sort({date: -1});
    //.sort({date: 'descending'})
}

async function getRandomMoment(username_param) {
    return await Moment.aggregate([
        { $match: { username: username_param } },
        { $sample: { size: 1 } }
        ]);
}

async function getByDate(param) {       //use this to get current/previous/next moment
    const date1 = new Date(param.date);
    const date2 = new Date(param.date);
    date2.setDate(date2.getDate()+1);

    return await Moment.findOne(  
        { username: param.username, createdDate : {"$gte": date1, "$lt": date2}} );
}

async function create(momentParam) {
    const moment = new Moment(momentParam);
    await moment.save();
}

