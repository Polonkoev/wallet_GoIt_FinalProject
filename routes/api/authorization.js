const express = require("express");
const router = express.Router();
const { logoutController } = require('../../controllers/Auth/logoutController')
const {auth} = require('../../middlewares/auth')


router.get("/logout", auth, logoutController);

module.exports = router;
