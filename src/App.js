import './App.css';
import React from 'react';
import TodoList from './components/TodoList/TodoList';
import CreateTodoForm from './components/CreateTodoForm/CreateTodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.createTodo = this.createTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
    this.state = { todos: [] };
  }

  componentWillMount() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    this.setState({ todos });
  }

  componentDidUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  createTodo(description) {
    const todos = this.state.todos,
      ids = todos.map(todo => todo.id),
      id = Math.max(Math.max(...ids) + 1, 1);

    todos.push({id, description, is_completed: false});
    this.setState({ todos });
  }

  deleteTodo(todoToDelete) {
    const todos = this.state.todos.filter((todo) => todo.id !== todoToDelete.id);
    this.setState({ todos });
  }

  completeTodo(todoToComplete) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === todoToComplete.id) {
        todo.is_completed = true;
      }

      return todo;
    });
    this.setState({ todos });
  }

  render() {
    const incompleted = this.state.todos.filter((todo) => todo.is_completed === false),
      completed = this.state.todos.filter((todo) => todo.is_completed);

    return (
      <div className="App">
        <div className="App__form">
          <CreateTodoForm onSubmit={this.createTodo}/>
        </div>
        <div className="App__todos">
          <TodoList todos={incompleted} onTodoComplete={this.completeTodo} onTodoDelete={this.deleteTodo} />
        </div>
        <div className="App__completed-todos">
          <TodoList todos={completed} onTodoDelete={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
