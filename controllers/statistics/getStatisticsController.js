const { Transaction } = require("../../models/Transactions");

const statisticsController = async (req, res) => {
  const { _id: ownerId } = req.user;
  const { year, month } = req.body;
  try {
    const pipeline = [
      {
        $match: {
          owner: ownerId,
          year,
          month,
        },
      },
      {
        $group: {
          _id: { category: "$category", type: "$type" },
          total: { $sum: "$amount" },
        },
      },
      {
        $group: {
          _id: null,
          expense: {
            $sum: {
              $cond: [{ $eq: ["$_id.type", false] }, "$total", 0],
            },
          },
          income: {
            $sum: {
              $cond: [{ $eq: ["$_id.type", true] }, "$total", 0],
            },
          },
          categories: {
            $push: {
              $cond: [
                { $eq: ["$_id.type", false] },
                { category: "$_id.category", total: "$total" },
                null,
              ],
            },
          },
        },
      },
      {
        $unwind: "$categories",
      },
      {
        $match: {
          categories: { $ne: null },
        },
      },
      {
        $group: {
          _id: null,
          expense: { $first: "$expense" },
          income: { $first: "$income" },
          categories: { $push: "$categories" },
        },
      },
      {
        $project: {
          _id: 0,
          expense: 1,
          income: 1,
          categories: 1,
        },
      },
    ];
    const result = await Transaction.aggregate(pipeline);
    if (result.length === 0) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json({ message: "Successful", data: result });
  } catch (error) {
    res.status(400).json({ message: `${error.message}` });
  }
};

module.exports = statisticsController;
