import React from 'react';
import PropTypes from 'prop-types';
import TodoComponent from './TodoComponent';
import AddTodoComponent from './AddTodoComponent';
import FooterComponent from './FooterComponent';

const TodoListComponent = ({
    todos,
    toggleTodo,
    listId
}) => (
    <React.Fragment>
        <h2>Todo List Number {listId}</h2>
        <AddTodoComponent listId={listId} /> 
        <ul>
            {todos.map(todo => (
                <TodoComponent 
                    key={todo.id}
                    {...todo}
                    onClick={
                        () => toggleTodo(todo.id, listId)
                    }
                />
            ))}
        </ul>
        <FooterComponent listId={listId}/>
    </React.Fragment>
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