const { getTransactions } = require("../../services/getTransactions");


const getTransactionController = async (req, res) => {
  try {
    const { _id } = req.user;

    const transactions = await getTransactions(_id);

    res.status(200).json({ transactions });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};

module.exports = {
  getTransactionController,
};
