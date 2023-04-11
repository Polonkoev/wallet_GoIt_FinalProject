const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const userRouter = require("./routes/api/userRouter");
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const transactionRouter = require("./routes/api/transaction");

const categoriesRouter = require("./routes/api/categories");
const statisticsRouter = require("./routes/api/statistics");

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/users", userRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/statistics", statisticsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
