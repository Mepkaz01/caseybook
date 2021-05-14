const users = require('../models/users');

const index = (req, res) => {
    res.render('users/index.ejs', { users: users }); //here using {users} or { users: users } is the samething
}

module.exports = {
    index
}