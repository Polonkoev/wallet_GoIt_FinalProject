const express = require("express");
const { auth } = require("../../middlewares/auth");
const { controllerWrapper } = require("../../helpers");
const {
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../../controllers/transactions");
const router = express.Router();

router.post("/", auth, controllerWrapper(createTransaction));

router.put("/:transactionId", auth, controllerWrapper(updateTransaction));

router.delete("/:transactionId", auth, controllerWrapper(deleteTransaction));

module.exports = router;
