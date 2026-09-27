const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoRoutes = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/mern_todo';

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB:', MONGO_URI))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('MERN Todo API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});