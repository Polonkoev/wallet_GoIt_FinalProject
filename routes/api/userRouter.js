const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth");
const { controllerWrapper } = require("../../helpers");

const { auth } = require("../../middlewares/auth");

router.post("/", controllerWrapper(authController.signupController));

router.post("/login",  controllerWrapper(authController.loginController));

router.get("/logout", auth, controllerWrapper(authController.logoutController));

router.get(
  "/current",
  auth,
  controllerWrapper(authController.currentUserController)
);

module.exports = router;
