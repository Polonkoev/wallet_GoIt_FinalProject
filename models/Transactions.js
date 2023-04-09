const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  type: {
    type: Boolean,
    required: [true, "Type is required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  date: {
    type: String,
    default: new Date().toLocaleString(),
  },
  category: {
    type: String,
    enum: [
      "Main expenses",
      "Products",
      "Car",
      "Self care",
      "Child care",
      "Household products",
      "Education",
      "Leisure",
      "other expenses",
    ],
    default: "other expenses",
  },
  comment: {
    type: String,
    default: "",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = {
  Transaction,
};
