import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from'../actions/types/actionTypes'



export const addTodo = (title, text) => ({
    type: ADD_TODO,
    title,
    text,
})
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})
export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})