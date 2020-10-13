import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions/todoAction'

const TodoItem = ({item}) => {
    const dispatch = useDispatch()
    const [editMode,setEditMode] = useState(false)
    const [editTitle,setEditTitle] = useState('')
    const deleteTheTodo = (id) => {
        dispatch(deleteTodo(id))
    }

    const changeMode = () => {
        setEditMode(!editMode)
        setEditTitle(item.task)
    }

    const cancelEdit = () => {
        setEditMode(!editMode)
    }

    const updateTheTodo = (item,updatedTitle) => {

        dispatch(updateTodo(item,updatedTitle))
        setEditMode(false)
    }
    return (
        <h1>
            {!editMode && item.task}
            {!editMode && <button onClick={()=>deleteTheTodo(item.id)}>X</button>}
            {!editMode && <button onClick={changeMode}>Edit</button>}
            {editMode && <input type='text' value={editTitle} onChange={(e)=>setEditTitle(e.target.value)}/>}
            {editMode && <button onClick={cancelEdit}>Cancel</button>}
            {editMode && <button onClick={()=>updateTheTodo(item,editTitle)}>Update</button>}
        </h1>
    )
}

export default TodoItem