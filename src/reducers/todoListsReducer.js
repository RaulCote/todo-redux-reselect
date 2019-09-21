const initialState = {
    1: {
        todos: [],
        visibilityFilter: 'SHOW_ALL'
    },
    2: {
        todos: [],
        visibilityFilter: 'SHOW_ALL'
    },
    3: {
        todos: [],
        visibilityFilter: 'SHOW_ALL'
    }
};

const addTodo = (state, action) => {
    const todoList = state[action.listId];
    const { todos } = todoList;

    return {
        ...state,
        [action.listId]: {
            ...todoList,
            todos: [
                ...todos,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        }
    };
};

const toggleTodo = (state, action) => {
    const todoList = state[action.listId];
    const { todos } = todoList;

    return {
       ...state,
       [action.listId]: {
           ...todoList,
           todos: todos.map(todo => (
             (todo.id === action.id)
                ? { ...todo, completed: !todo.completed }
                : todo)
            )
        }
    }
}

const setVisibilityFilter = (state, action) => {
    const todoList = state[action.listId];

    return {
        ...state,
        [action.listId]: {
            ...todoList,
            visibilityFilter: action.filter
        }
    };
};

const todoListsReducer = (
    state = initialState,
    action
) => {
    if (!state[action.listId]) return state;

    switch(action.type) {
        case 'ADD_TODO':
            return addTodo(state, action);
        case 'TOGGLE_TODO':
            return toggleTodo(state, action);
        case 'SET_VISIBILITY_FILTER':
            return setVisibilityFilter(state, action);
        default:
            return state;
    }
};

export default todoListsReducer;