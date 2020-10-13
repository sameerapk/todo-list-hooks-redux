import {combineReducers} from 'redux'

import todoListReducer from './reducers/todoListReducer'

export default combineReducers({
    todos: todoListReducer
})