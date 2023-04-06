const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  // const [tokenType, token] = req.headers["authorization"].split(" ");
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    // if (!token === "Bearer") {
    next(res.status(401).json({ message: "Not authorized" }));
  }

  try {
    const user = jwt.decode(token, process.env.JWT_SECRET);
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
