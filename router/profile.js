const express = require("express");
const router = express.Router();
const profileController = require("../controller/profile");

router.get('/profiles',profileController.getProfileData);

module.exports = router;