const Joi = require("joi");

const transactionSchema = Joi.object({
  type: Joi.boolean().required(),
  amount: Joi.number().positive().required(),
  date: Joi.string(),
  category: Joi.string().valid(
    "Main expenses",
    "Products",
    "Car",
    "Self care",
    "Child care",
    "Household products",
    "Education",
    "Leisure",
    "other expenses"
  ),
  comment: Joi.string(),
  owner: Joi.string().required(),
});

module.exports = transactionSchema;
