import React from 'react';
import TaskItem from './TaskItem';

// Maps through the todos array and renders each TaskItem
function TaskList({ todos, onDelete }) {
  if (todos.length === 0) {
    return <p>No tasks yet. Add one above.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <TaskItem key={todo._id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;