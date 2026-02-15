const express = require("express");
const cors = require("cors");

const todosRoutes = require("./routes/todos");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todosRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

module.exports = app;
