const express = require("express");
const { auth } = require("../../middlewares/auth");
const { controllerWrapper } = require("../../helpers");
const {
  createTransaction,
  updateTransaction,
  deleteTransaction,
} = require("../../controllers/transactions");
const currency = require("../../controllers/currency/currencyPrivatBank");
const {
  getTransactionController,
} = require("../../controllers/transactions/getTransactionController");
const {
  getTransactionById,
} = require("../../controllers/transactions/getTransactionById");
const router = express.Router();

router.post("/", auth, controllerWrapper(createTransaction));

router.get("/", auth, controllerWrapper(getTransactionController));

router.get("/currency", auth, controllerWrapper(currency));

router.put("/:transactionId", auth, controllerWrapper(updateTransaction));

router.delete("/:transactionId", auth, controllerWrapper(deleteTransaction));

router.get("/:transactionId", auth, controllerWrapper(getTransactionById));

module.exports = router;
