const Joi = require("joi");

const addTransaction = Joi.object({
  type: Joi.boolean().required(),
  amount: Joi.number().required(),
  date: Joi.object({
    time: Joi.number(),
    day: Joi.number(),
    month: Joi.number(),
    year: Joi.number(),
  }),
  category: Joi.string().valid(
    "main expenses",
    "products",
    "car",
    "self care",
    "child care",
    "household products",
    "education",
    "leisure",
    "other expenses",
    "income"
  ),
  comment: Joi.string(),
});

const editTransaction = Joi.object({
  type: Joi.boolean(),
  amount: Joi.number(),
  date: Joi.object({
    time: Joi.number(),
    day: Joi.number(),
    month: Joi.number(),
    year: Joi.number(),
  }),

  category: Joi.string().valid(
    "main expenses",
    "products",
    "car",
    "self care",
    "child care",
    "household products",
    "education",
    "leisure",
    "other expenses",
    "income"
  ),
  comment: Joi.string().optional(),
});

module.exports = {
  addTransaction,
  editTransaction,
};
