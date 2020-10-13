import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addTodo } from '../redux/actions/todoAction'

const AddTodo = () => {
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(todo))
        setTodo('')
    }
    const [todo,setTodo] = useState('')
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Add Items'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)} />
            <input 
            type='submit' 
            />
        </form>
    )
}

export default AddTodo