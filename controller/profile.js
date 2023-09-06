const data = require("../models/Data.json");

function getProfileData(req,res){
    const profiles = data;
    res.send({profiles});
}

module.exports = {getProfileData};