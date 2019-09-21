import { combineReducers } from 'redux';
import todoListsReducer from './todoListsReducer';

const Reducers = combineReducers({
  todoLists: todoListsReducer
})

export default Reducers;