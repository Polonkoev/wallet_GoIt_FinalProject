
const { Transaction } = require("../../models/Transactions");



// const getTransactionById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const transactionById = await Transaction.findOne({ _id: id });

//     if (!transactionById) {
//       return res.status(404).json({ error: `ID ${id} not found` });
//     }

//     res.status(200).json({ data: transactionById });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };


const getTransactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const transactionById = await Transaction.findOne({ id });

    if (!transactionById) {
      return res.status(404).json({ message: `ID ${id} not found` });
    }

    res.status(200).json({ message: "Successful", data: transactionById });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};




module.exports = {
  getTransactionById,
};



