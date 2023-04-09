const express = require("express");
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
