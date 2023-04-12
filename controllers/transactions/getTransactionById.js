const { Transaction } = require("../../models/Transactions");

const getTransactionById = async (req, res) => {
  try {
    const { transactionId } = req.params;
    const { _id: owner } = req.user;
    const transactionById = await Transaction.findOne({
      _id: transactionId,
      owner,
    });

    if (!transactionById) {
      return res.status(404).json({ message: `Transaction was not found` });
    }

    res.status(200).json({ message: "Successful", data: transactionById });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};

module.exports = {
  getTransactionById,
};
