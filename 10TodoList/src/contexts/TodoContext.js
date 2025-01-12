import { createContext,useContext } from "react";

export const TodoContext = createContext({
    Todos:[],
    AddTodo : (todo)=>{},
    UpdateTodo : (id,todo)=>{},
    RemoveTodo : (id)=>{},
    ToggleTodo : (id)=>{},

})

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = ()=>{
    return useContext(TodoContext);
}