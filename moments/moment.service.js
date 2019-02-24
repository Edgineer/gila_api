const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Moment = db.Moment;

module.exports = {
 //method names
 	create,
 	get_all_moments,
 	get_random_moment
 	//do we want ability to delete old moments?

 	//random
 	//previous & forward dates
 	//selected date
 	//all dates
};

//method implementations

async function create(momentParam) {
    const moment = new Moment(momentParam);
    await moment.save();
}

/*
async function update(id, userParam) {
    const user = await User.findById(id);

    // validate
    if (!user) throw 'User not found';
    if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(user, userParam);

    await user.save();
}*/

async function get_moment(date, username){		//if previous button, let date=previous date. if forward button, let date=next date.
	const moment = await Moment.findById(date);
	if (!moment) throw 'Moment for this date not found';
	return await Moment.findById(username).select('text');

}

async function get_all_moments(username) {
	return await User.findById(username).select('text');
}