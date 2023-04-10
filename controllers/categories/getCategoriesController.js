const fs = require("fs/promises");
const path = require("path");
const categoriesPath = path.resolve("./data/categories.json");

const getCategoriesController = async (req, res) => {
  const dataCategories = await fs.readFile(categoriesPath, "utf8");
  if (!dataCategories) {
      res.status(404).json({ message: `Not found any categories` });
  }
  res
    .status(200)
    .json({ message: "Successful operation", data: JSON.parse(dataCategories) });
};

module.exports = getCategoriesController;
