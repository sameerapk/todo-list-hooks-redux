import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
    return (
        <div>
            {todos.length === 0 ? <h1>No more todos left!!!!!!!!!!</h1> : todos.map(item=>{
                console.log('dassd', item)
                return <TodoItem item={item} key={item.id} />
            })}
        </div>
    )
}

export default TodoList