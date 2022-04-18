import React from 'react';
import MinusIcon from './minus-sign.png';
import CheckIcon from './check.png';
import './TodoItem.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.todo);
    }

    onComplete() {
        this.props.onComplete(this.props.todo);
    }

    render() {
        const todo = this.props.todo;

        let className = 'todo-item',
            checkButton = <button className='todo-item-controls__btn' onClick={this.onComplete}><img src={CheckIcon} alt='Complete' /></button>;
        if (todo.is_completed) {
            className += ' todo-item--completed';
            checkButton = '';
        }
        
        return (<div className={className}>
            {todo.description}
            <div className='todo-item-controls'>
                {checkButton}
                <button className='todo-item-controls__btn' onClick={this.onDelete}><img src={MinusIcon} alt='Delete' /></button>
            </div>
        </div>);
    }
}

export default TodoItem;