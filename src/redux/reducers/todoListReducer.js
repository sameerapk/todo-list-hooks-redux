import { todoConstantTypes } from "../constants/todoConstants"

const INITIAL_STATE = {
    todos : [
        {
            id:1,
            task:'Learn redux'
        },
        {
            id:2,
            task:'Go outside and play'
        },
        {
            id:3,
            task:'Buy veggies'
        }
    ]
}


const todoListReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case todoConstantTypes.ADD_TODO : 
        return {
            ...state,
            todos: [...state.todos,{id:4,task:action.payload}]
        }
        case todoConstantTypes.DELETE_TODO: 
        return {
            ...state,
            todos:state.todos.filter(item=>item.id !== action.payload)
        }
        case todoConstantTypes.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(item=>{
                    if(item.id === action.payload.item.id) {
                        item.task = action.payload.editedTitle
                    }
                    return item
                })
            }
        default: 
        return state
    }
 }


export default todoListReducer