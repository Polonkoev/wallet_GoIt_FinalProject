const { logout } = require('../../services/logout')

const logoutController = async (req, res) => {
  const { _id } = req.user;
  await logout(_id);
  res.status(200).json({
    message: "Logout successful"
  });
};

module.exports = logoutController;
