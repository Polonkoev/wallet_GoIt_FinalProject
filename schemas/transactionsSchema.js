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
    "other expenses"
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
    "other expenses"
  ),
  comment: Joi.string(),
}).min(1);

module.exports = {
  addTransaction,
  editTransaction,
};
