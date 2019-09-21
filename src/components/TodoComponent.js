import React from 'react';
import PropTypes from 'prop-types';

const TodoComponent = ({
    onClick,
    completed,
    text
}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 
                'line-through' : 
                'none',
            cursor: 'pointer'
        }}
    >
        {text}
    </li>
)

TodoComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default TodoComponent;