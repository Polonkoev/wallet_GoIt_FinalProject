const axios = require("axios");

const getCurrency = async (req, res, next) => {
  await axios
    .get("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11кк")
    .then((response) => {
      const currency = response.data;
      res.status(200).json({ currency });
    })
    .catch(() => {
      return res.status(500).json({
        message: "Internal Server error ",
        code: 500,
      });
    });
};

module.exports = getCurrency;
