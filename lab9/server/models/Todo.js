const mongoose = require('mongoose');

// Schema for a single task
const TodoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true // adds createdAt / updatedAt automatically
});

module.exports = mongoose.model('Todo', TodoSchema);