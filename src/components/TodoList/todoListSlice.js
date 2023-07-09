import { createSlice } from "@reduxjs/toolkit";

export const  todoListSlice = createSlice({
    name: 'filters',
    initialState: [
        {id: 1, name: 'Learn React', completed: false, priority: 'Hight'},
        {id: 2, name: 'Learn Redux', completed: true, priority: 'Hight'}
    ],
    reducers : {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
        }
    }
})