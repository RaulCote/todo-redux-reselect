import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const AddTodoComponent = ({ dispatch, listId }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return;
                    }

                    dispatch(addTodo(input.value, listId))
                    input.value = '';
                }}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'

                }}
            >
                <input 
                    ref={node => (input = node)}
                    style={{
                        height: '50px',
                    }}
                />
                <button 
                    type={'submit'}
                    style={{
                        width: '100%',
                        margin: '10px 0'
                    }}>
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodoComponent);