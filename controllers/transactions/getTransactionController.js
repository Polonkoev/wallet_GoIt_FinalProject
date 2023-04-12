const { Transaction } = require("../../models/Transactions");

const getTransactionController = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 7 } = req.query;
  const skip = (page - 1) * limit;
  const allTransactions = await Transaction.find({ owner: owner })
    .skip(skip)
    .limit(limit)
    .sort({
      date: -1,
    });
  res.status(200).json({ data: allTransactions });

  if (!allTransactions) {
    res.status(404, "Not found");
  }
};

module.exports = {
  getTransactionController,
};
