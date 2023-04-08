const { logout } = require('../../services/logout')
const {User} = require('../../models/User')

const logoutController = async (req, res) => {
  const { _id } = req.user;
  // await logout(_id);
   await User.findByIdAndUpdate(_id, { token: "" });
  res.status(200).json({
    message: "Logout successful"
  });
};

module.exports = logoutController;
