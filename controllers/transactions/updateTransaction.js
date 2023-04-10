const { Transaction } = require("../../models/Transactions");
const { User } = require("../../models/User");
const { transactionSchema } = require("../../schemas");

const updateTransaction = async (req, res, next) => {
  const body = req.body;
  const { transactionId: id } = req.params;
  const { error } = transactionSchema.validate(body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const toUpdate = await Transaction.findById(id);
  const transaction = await Transaction.findByIdAndUpdate(
    req.params.transactionId,
    body,
    { new: true }
  );

  if (transaction && body.type === false && toUpdate.type === true) {
    const calc = toUpdate.amount + body.amount;
    const user = await User.findById(body.owner);
    user.balance = user.balance - calc;
    user.save();
  }

  if (transaction && body.type === true && toUpdate.type === false) {
    const calc = toUpdate.amount + body.amount;
    const user = await User.findById(body.owner);
    user.balance = user.balance + calc;
    user.save();
  }

  if (transaction && body.type === false && body.type === toUpdate.type) {
    if (toUpdate.amount > body.amount) {
      const calc = toUpdate.amount - body.amount;
      const user = await User.findById(body.owner);
      user.balance = user.balance + calc;
      user.save();
    }
    if (toUpdate.amount < body.amount) {
      const calc = body.amount - toUpdate.amount;
      const user = await User.findById(body.owner);
      user.balance = user.balance - calc;
      user.save();
    }
  }

  if (transaction && body.type === true && body.type === toUpdate.type) {
    if (toUpdate.amount > body.amount) {
      const calc = toUpdate.amount - body.amount;
      const user = await User.findById(body.owner);
      user.balance = user.balance - calc;
      user.save();
    }
    if (toUpdate.amount < body.amount) {
      const calc = body.amount - toUpdate.amount;
      const user = await User.findById(body.owner);
      user.balance = user.balance + calc;
      user.save();
    }
  }

  if (transaction) {
    res.json({ data: transaction });
  } else {
    res.status(404).json({ message: "missing fields" });
  }
};

module.exports = updateTransaction;
