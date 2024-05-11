const express = require("express");
const app = express();
const { tasks, addTask, removeTask, updateTask } = require("./utils");

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.post("/task", (req, res) => {
  const newTask = req.body;
  addTask(newTask);
  res.status(201).send("task created");
});

app.put("/task/:id", (req, res) => {
  const id = req.params.id;
  const givenTask = req.body;

  updateTask(id, givenTask);

  res.status(200).send("task updated");
});

app.delete("/task/:id", (req, res) => {
  const id = req.params.id;
  removeTask(id);
  console.log(id);
  res.status(200).send("task deleted");
});

app.listen(4000, () => console.log("server is running"));
