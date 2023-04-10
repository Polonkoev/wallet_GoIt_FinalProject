const express = require("express");
const { auth } = require("../../middlewares/auth");
const { controllerWrapper } = require("../../helpers");
const getCategoriesController = require("../../controllers/categories/getCategoriesController");

const router = express.Router();

router.get("/", auth, controllerWrapper(getCategoriesController));


module.exports = router;
