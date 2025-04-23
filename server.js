const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

let todos = [];

app.use(express.static('public'));
app.use(express.json());

app.get('/api/todos', (req, res) => res.json(todos));

app.post('/api/todos', (req, res) => {
  const todo = req.body.todo;
  if (todo) {
    todos.push(todo);
    res.json({ message: 'Todo added!' });
  } else {
    res.status(400).json({ error: 'Todo text is required' });
  }
});

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on http://localhost:${PORT}`));
