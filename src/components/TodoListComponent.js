import React from 'react';
import PropTypes from 'prop-types';
import TodoComponent from './TodoComponent';

const TodoListComponent = ({
    todos,
    toggleTodo
}) => (
    <ul>
        {todos.map(todo => (
            <TodoComponent 
                key={todo.id}
                {...todo}
                onClick={
                    () => toggleTodo(todo.id)
                }
            />
        ))}
    </ul>
);

TodoListComponent.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default TodoListComponent;