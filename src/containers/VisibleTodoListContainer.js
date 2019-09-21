import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';
import TodoListComponent from '../components/TodoListComponent';
import { makeGetVisibleTodos } from '../selectors';


const makeMapStateToProps = () => {
    const getVisibleTodos = makeGetVisibleTodos()
    const mapStateToProps = (state, props) => {
        return {
            todos: getVisibleTodos(state, props)
        }
    }

    return mapStateToProps
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id, listId) => dispatch(toggleTodo(id, listId))
})

const VisibleTodoListContainer = connect(
    makeMapStateToProps,
    mapDispatchToProps
)(TodoListComponent)

export default VisibleTodoListContainer;