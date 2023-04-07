const {Transaction} = require('../models/Transactions')

async function getTransactions(owner) {
  const transactions = await Transaction.find({ owner });
  return transactions;
}

module.exports = {
  getTransactions,
  
};