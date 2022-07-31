import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos:[],
    },
    reducers: {
        addTodo(state,action) {
            
        },
        removeTodo(state,action) {},
        toggleTodoCompleted(state,action) {}
    }
})