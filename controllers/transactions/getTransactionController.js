
const { Transaction } = require("../../models/Transactions");

const getTransactionController = async (req, res) => {

  
  const { _id: owner } = req.user;
  const allTransactions = await Transaction.find({ owner: owner });

  if (!allTransactions) {
    res.status(404, "Not found");
  }
  return res.status(200).json({ data: allTransactions });
};


module.exports = {
  getTransactionController,
};
