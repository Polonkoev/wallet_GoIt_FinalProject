const { Transaction } = require("../../models/Transactions");
const { transactionSchema } = require("../../schemas");

const updateTransaction = async (req, res, next) => {
  const body = req.body;
  const { error } = transactionSchema.validate(body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const transaction = await Transaction.findByIdAndUpdate(
    req.params.transactionId,
    body
  );

  if (transaction) {
    res.json({ data: transaction });
  } else {
    res.status(404).json({ message: "missing fields" });
  }
};

module.exports = updateTransaction;
