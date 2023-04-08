const { Transaction } = require("../../models/Transactions");
const { transactionSchema } = require("../../schemas");

const createTransaction = async (req, res, next) => {
  const body = req.body;
  const { error } = transactionSchema.validate(body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const transaction = await Transaction.create(body);
  res.status(201).json({ data: transaction });
};

module.exports = { createTransaction };
