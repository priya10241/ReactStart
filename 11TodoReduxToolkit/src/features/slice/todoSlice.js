import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                tittle: action.payload,
                isComplete:false
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((td)=>td.id!==action.payload);
        },
        updateTodo : (state,action)=>{
            state.todos = state.todos.map((td)=>td.id===action.payload.newtd.id?action.payload.newtd:td);
            // console.log(action.payload.newtd)
        },
        toggleComplete : (state,action)=>{
            state.todos = state.todos.map((td)=>td.id===action.payload?{...td,isComplete:!td.isComplete}:td);
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleComplete} = todoSlice.actions;

export default todoSlice.reducer


