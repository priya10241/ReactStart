import { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext"
import { useEffect } from "react";


function TodoItem(todo){
    todo = todo.todo
    const [isEditing,setIsEditing] = useState(false);
    const [todoMsg,settodoMsg] = useState(todo.tittle);
    const {Todos,ToggleTodo,UpdateTodo,RemoveTodo} = useTodoContext();
    const changeCompleted = ()=>{
        ToggleTodo(todo.id);
    }
    const EditTodo = ()=>{
        if(!isEditing){
            setIsEditing(true);
            const el = document.getElementById(todo.id);
            el.removeAttribute('readOnly');
        }
        else{
            setIsEditing(false);
            const el = document.getElementById(todo.id);
            el.setAttribute('readOnly',true);
            UpdateTodo(todo.id, {...todo,tittle:todoMsg});
        }
    }
    console.log(todo.tittle + " "  + todoMsg)
    useEffect(()=>{
        settodoMsg(todo.tittle);
    },[todo.tittle])
    return(
        <>
            <center>
             <div className="w-2/5 rounded flex flex-row text-1xl gap-x-0 flex-wrap m-6 p-2" key={todo.id}>
                 <input onChange={(e)=>{
                    settodoMsg(e.target.value);
                 }} id={todo.id} type="text" value={todoMsg} readOnly className={`${!todo.complete?"bg-[#91AC8F]":"bg-teal-400 line-through"} block text-black font-bold rounded-l-lg w-1/2 p-2`}/>
                 <div className="block bg-[#66785F] rounded-r-lg flex flex row justify-end gap-x-3 p-2 ">
                     <div><button type="button" className="text-slate-100 border border-slate-300 rounded" onClick={EditTodo}>{isEditing?"✏️":"📁"}</button></div>
                     <div><button type="button" className="text-slate-100" onClick={changeCompleted}>✅</button></div>
                     <div><button type="button" className="text-slate-100" onClick={()=>{
                        RemoveTodo(todo.id);
                    }}>❌</button></div>
                 </div>
             </div>
             </center>
        </>
    )
}

export default TodoItem