import { createSelector } from 'reselect';

const getVisibilityFilter = (state, props) => 
    state.todoLists[props.listId].visibilityFilter

const setFilter = (state, props) => 
    props.filter === state.todoLists[props.listId].visibilityFilter

const getTodos = (state, props) => 
    state.todoLists[props.listId].todos


export const makeFilter = createSelector(
    [setFilter],
    (visibilityFilter) => visibilityFilter
)

export const makeGetVisibleTodos = () => {
    return createSelector(
        [getVisibilityFilter, getTodos],
        (visibilityFilter, todos) => {
            switch (visibilityFilter) {
                case 'SHOW_COMPLETED':
                    return todos.filter(
                        todo => todo.completed
                    )
                case 'SHOW_ACTIVE':
                    return todos.filter(
                        todo => !todo.completed
                    )
                default:
                    return todos
            }
        }
    )
}



