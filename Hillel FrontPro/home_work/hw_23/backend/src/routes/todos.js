const express = require("express");
const router = express.Router();

let todos = [];
let id = 1;

// CREATE
router.post("/", (req, res) => {
  const { title, completed } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title обязателен" });
  }
....
  const newTodo = {
    id: id++,
    title,
    completed: Boolean(completed)
  };


  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// READ ALL
router.get("/", (req, res) => {
  res.json(todos);
});

// READ ONE
router.get("/:id", (req, res) => {
  const todo = todos.find(t => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ message: "Не найдено" });
  res.json(todo);
});

// UPDATE
router.put("/:id", (req, res) => {
  const todo = todos.find(t => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ message: "Не найдено" });

  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// DELETE
router.delete("/:id", (req, res) => {
  const index = todos.findIndex(t => t.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Не найдено" });

  const deleted = todos.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;
