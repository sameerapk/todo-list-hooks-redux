import { todoConstantTypes } from "../constants/todoConstants"

export const addTodo = (item) => {
    return {
        type: todoConstantTypes.ADD_TODO,
        payload: item
    }
}

export const deleteTodo = (item) => {
    return {
        type: todoConstantTypes.DELETE_TODO,
        payload: item
    }
}

export const updateTodo = (item,editedTitle) => {
    return {
        type: todoConstantTypes.UPDATE_TODO,
        payload: {
            item,
            editedTitle
        }
    }
}