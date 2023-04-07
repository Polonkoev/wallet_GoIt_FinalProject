const express = require("express");
const router = express.Router();
const authController = require('../../controllers/auth')
const { controllerWrapper } = require("../../helpers");

// const {signupController} = require('../../controllers/Auth/signupController')
// const { logoutController } = require('../../controllers/Auth/logoutController')
const {auth} = require('../../middlewares/auth')

router.post('/signup', controllerWrapper(authController.signupController))

router.post("/login", controllerWrapper(authController.loginController));

router.get("/logout", auth, controllerWrapper(authController.logoutController));

module.exports = router;
