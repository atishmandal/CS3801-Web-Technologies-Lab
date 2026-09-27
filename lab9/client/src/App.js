import React, { Component } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = 'http://localhost:5000/api/todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Fetch existing tasks from MongoDB via the server on mount
  componentDidMount() {
    axios.get(API_URL)
      .then((response) => {
        this.setState({ todos: response.data });
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }

  // Update newTodo state as the user types
  handleInputChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  // Add a new task
  handleSubmit(event) {
    event.preventDefault();
    const text = this.state.newTodo.trim();
    if (!text) return; // ignore empty input

    const newTask = { task: text, completed: false };

    axios.post(API_URL, newTask)
      .then((response) => {
        this.setState((prevState) => ({
          todos: [response.data, ...prevState.todos],
          newTodo: ''
        }));
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  }

  // Delete a task by its MongoDB _id
  handleDelete(id) {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        this.setState((prevState) => ({
          todos: prevState.todos.filter((todo) => todo._id !== id)
        }));
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  }

  render() {
    return (
      <div style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
        <h1>MERN Todo App</h1>
        <TaskForm
          newTodo={this.state.newTodo}
          onInputChange={this.handleInputChange}
          onSubmit={this.handleSubmit}
        />
        <TaskList todos={this.state.todos} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;