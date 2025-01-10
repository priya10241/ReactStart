import { createContext,useContext } from "react";

export const TodoContext = createContext({
    Todos:[{
        id : 4,
        tittle:"learn ",
        complete: false
    }],
    AddTodo : (todo)=>{},
    UpdateTodo : (id,todo)=>{},
    RemoveTodo : (id)=>{},
    ToggleTodo : (id)=>{},

})

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = ()=>{
    return useContext(TodoContext);
}