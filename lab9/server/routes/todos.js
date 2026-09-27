const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// GET /api/todos -> fetch all tasks
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/todos -> add a new task
router.post('/', async (req, res) => {
  try {
    const { task } = req.body;
    if (!task || !task.trim()) {
      return res.status(400).json({ error: 'Task text is required' });
    }
    const newTodo = new Todo({ task, completed: false });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/todos/:id -> toggle / update a task (bonus CRUD op)
router.put('/:id', async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Todo not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/todos/:id -> delete a task (bonus CRUD op)
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Todo not found' });
    res.json({ message: 'Todo deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;