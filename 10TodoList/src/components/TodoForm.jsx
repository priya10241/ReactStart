import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext"
import { useEffect } from "react";

function TodoForm(){
    const {AddTodo} = useTodoContext();
    const [newtodo,setNewtodo] = useState();
    const addNewTodo = ()=>{
        AddTodo(newtodo);
        // console.log(newtodo);
        setNewtodo('');
    }

    return(
        <>
        <center>
        <h1 className="text-gray-800 font-bold text-2xl pt-5">Manage Your Todos</h1>
        <input type = "text" placeholder="Enter Todo" value={newtodo} onChange={(e)=>{setNewtodo(e.target.value)}} className="text-2xl text-slate-950 rounded-l pl-2 border-2 outline-2 border-gray-500 outline-gray-500 mt-10 w-2/5"/>
        <button type="button" className="pl-2 pr-2 text-2xl bg-emerald-800 text-white rounded-r border-2 border-emerald-800 " onClick={addNewTodo}>Submit</button>
        </center>
        </>
    )
}

export default TodoForm