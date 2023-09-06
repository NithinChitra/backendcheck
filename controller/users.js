const data = require('../models/Data.json');


//router work
function getUsers(req,res){
    const users = data;
    res.send({users});
}

module.exports = {getUsers};