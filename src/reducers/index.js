import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import visibilityFilterReducer from './visibilityFilterReducer'

const Reducers = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})

export default Reducers;