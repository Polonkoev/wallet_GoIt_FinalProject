const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const { SECRET } = process.env;

const auth = async (req, res, next) => {
  // const [tokenType, token] = req.headers["authorization"].split(" ");
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    // if (!token === "Bearer") {
    next(res.status(401).json({ message: "Not authorized" }));
  }

  try {
    // const user = jwt.decode(token,SECRET);
    const { id } = jwt.verify(token, SECRET);
    const user = await User.findById(id);
    // if (!user || !user.token || user.token !== token){
      if (!user) {
        next(res.status(401).json({ message: "aNot authorized" }));
      }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    next(res.status(400).json({ message: "Invalid token" }));
  }
};

module.exports = {
  auth,
};
