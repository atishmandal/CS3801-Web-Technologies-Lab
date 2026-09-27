import React from 'react';

// Presentational form for adding a new task
function TaskForm({ newTodo, onInputChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
      <input
        type="text"
        value={newTodo}
        onChange={onInputChange}
        placeholder="Enter a new task"
        style={{ flex: 1, padding: 8 }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        Add
      </button>
    </form>
  );
}

export default TaskForm;