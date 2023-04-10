const { Transaction } = require("../../models/Transactions");
const { User } = require("../../models/User");
const { transactionSchema } = require("../../schemas");

const createTransaction = async (req, res, next) => {
  const body = req.body;
  const { error } = transactionSchema.validate(body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const calc = body.type === true ? body.amount : body.amount * -1;
  const user = await User.findById(body.owner);
  user.balance = user.balance + calc;
  user.save();

  const transaction = await Transaction.create(body);
  res.status(201).json({ data: transaction });
};

module.exports = createTransaction;
