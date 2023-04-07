const Joi = require("joi");

const emailPattern =
  /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}.){1,1}[-A-Za-z]{2,})$/u;

const userSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().required(),
});

module.exports = userSchema;