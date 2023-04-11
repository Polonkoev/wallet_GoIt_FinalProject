const express = require("express");
const statisticsController = require("../../controllers/statistics/getStatisticsController");
const { controllerWrapper } = require("../../helpers");
const { auth } = require("../../middlewares/auth");
const router = express.Router();

router.get("/", auth, controllerWrapper(statisticsController));

module.exports = router;
