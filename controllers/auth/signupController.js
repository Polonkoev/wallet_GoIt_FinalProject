const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/User");

const { userSchema } = require("../../schemas");

const { SECRET } = process.env;


const signupController = async (req, res) => {
  const body = req.body;
  const { error } = userSchema.validate(body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }

  const { email, password, name } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({ message: "Email in use" });
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashPassword, name });

  const token = jwt.sign({ userId: newUser._id }, SECRET, { expiresIn: '1h' });

  res.status(201).json({
    user: {
      email: newUser.email,
      name: newUser.name,
    },
    token: token
  });
};


module.exports = signupController;
