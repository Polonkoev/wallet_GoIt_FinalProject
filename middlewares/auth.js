const { passport } = require("./config-passport");

require("dotenv").config();

const auth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if ((!user || err, user.token !== token)) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Unauthorized",
        data: "Unauthorized",
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};

module.exports = { auth };
