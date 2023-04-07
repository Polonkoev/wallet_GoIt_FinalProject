const { User } = require("../models/User");

async function logout(_id) {
  return await User.findByIdAndUpdate(
    _id,
    { token: null },
    {
      new: true,
    }
  );
}

module.exports = {
  logout,
};
