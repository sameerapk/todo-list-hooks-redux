import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App =() => {
const todosList = useSelector(state=>state.todos.todos)

  return (
    <div>
      <AddTodo />
      <TodoList todos={todosList} />
    </div>
  );
}

export default App;
