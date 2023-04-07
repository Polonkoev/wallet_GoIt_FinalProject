const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/User");
const { SECRET } = process.env;

const login = async (req, res) => {
  const { email, password, name } = req.body;

  const user = await User.findOne({ email });
  const compareResult = await bcrypt.compare(password, user.password);

  if (!user || !compareResult) {
    res.status(401).json({ message: "Email or password is wrong" });
  }

  const id = user._id;
  const token = jwt.sign({ id }, SECRET, { expiresIn: "23h" });
  await User.findByIdAndUpdate(id, { token });
  res.status(201).json({
    token,
    user: {
      email: user.email,
      name: user.name,
    },
  });
};

module.exports = login;
