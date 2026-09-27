import React from 'react';

// Represents a single task in the list, with a delete button
function TaskItem({ todo, onDelete }) {
  return (
    <li
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px 0'
      }}
    >
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.task}
      </span>
      <button
        onClick={() => onDelete(todo._id)}
        style={{
          marginLeft: 12,
          background: '#e53935',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '4px 10px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;