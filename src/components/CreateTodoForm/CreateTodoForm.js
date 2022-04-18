import React from "react";
import "./CreateTodoForm.css";

class CreateTodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e.target.children[0].value);
    }

    render() {
        return (
            <form className="create-todo-form" onSubmit={this.handleSubmit}>
                <input placeholder="To do..." className="create-todo-form__input" required></input>
            </form>
        );
    }
}

export default CreateTodoForm;