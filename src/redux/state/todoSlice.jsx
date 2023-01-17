import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        value:[],
    },
    reducers:{
        addTodo:(state,action)=>{
            state.value.push(action.payload)
        },
        editTodo:(state,action)=>{
            state.value.splice(action.payload['index'],1,action.payload['task'])
        },
        removeTodo:(state,action)=>{
            state.value.splice(action.payload,1)
        }
    }
})
export const {addTodo,editTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer