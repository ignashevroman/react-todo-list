import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends React.Component {
    render() {
        const todos = this.props.todos.map((todo) => {
            return (<li key={todo.id}><TodoItem todo={todo} onComplete={this.props.onTodoComplete} onDelete={this.props.onTodoDelete} /></li>);
        });

        const render = todos.length === 0 ? (<div className="todo-list-error">List is empty</div>) : (<ul className="todo-list">{todos}</ul>)
        return (<div className="todo-list-wrapper">{render}</div>);
    }
}

export default TodoList;