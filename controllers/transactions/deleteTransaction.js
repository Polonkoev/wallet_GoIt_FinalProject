const { Transaction } = require("../../models/Transactions");

const deleteTransaction = async (req, res, next) => {
  const transaction = await Transaction.findByIdAndDelete(
    req.params.transactionId
  );
  if (transaction) {
    res.json({ message: "transaction deleted" });
  } else {
    res.status(404).json({ message: "Not found" });
  }
};

module.exports = deleteTransaction;
