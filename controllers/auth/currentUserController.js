const jwt = require("jsonwebtoken");

const { User } = require("../../models/User");
const { SECRET } = process.env;

 const currentUserController = async (req, res) => {    
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
          return res.json({ message: "There is no such user" });
        }
    
        const token = jwt.sign(
          {
            id: user._id,
          },
          SECRET,
          { expiresIn: "30d" }
        );
    
        res.json({ user, token });
      } catch (error) {
        res.json({ message: "Not allowed" });
      }

}

module.exports = currentUserController;