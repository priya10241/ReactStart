import { useEffect, useState } from "react";
import  {removeTodo, toggleComplete, updateTodo } from "../features/slice/todoSlice";
import { useDispatch } from "react-redux";
function TodoList(todo){
    todo = todo.todo
    let [isEditing,setIsEditing] = useState(false);
    let [todoMsg,settodoMsg] = useState(todo.tittle);
    let [read,setRead] = useState(true);
    const dispatch = useDispatch();
    const EditTodo = ()=>{
        if(isEditing){
            setIsEditing(!isEditing);
            setRead(true);
            dispatch(updateTodo({newtd:{...todo,tittle:todoMsg}}));  
        }
        else{
            setIsEditing(!isEditing);
            setRead(false);
        }
    }
    const taskCompleted = ()=>{
        dispatch(toggleComplete(todo.id));
    }
    const removeTask=()=>{
        dispatch(removeTodo(todo.id));
        settodoMsg(todo.tittle);
        dispatch(updateTodo({newtd:{...todo,tittle:todoMsg}}))
        
    }

    useEffect(()=>{
        settodoMsg(todo.tittle);
    },[todo.tittle])
    return(
        <>
        <center>
             <div className="w-2/5 rounded flex flex-row text-1xl gap-x-0 flex-wrap m-6 p-2 " id={todo.id}>
                 <input onChange={(e)=>{
                    settodoMsg(e.target.value);
                 }} type="text" value={todoMsg} id={todo.id} readOnly={read} className={`${!todo.isComplete?"bg-[#91AC8F]":"bg-teal-400 line-through"} block text-black font-bold rounded-l-lg w-1/2 p-2`}/>
                 <div className="block bg-[#66785F] rounded-r-lg flex flex row justify-end gap-x-3 p-2 ">
                     <div><button type="button" className="text-slate-100 border border-slate-300 rounded" onClick={EditTodo}>{isEditing?"✏️":"📁"}</button></div>
                     <div><button type="button" className="text-slate-100" onClick={taskCompleted}>✅</button></div>
                     <div><button type="button" className="text-slate-100" onClick={removeTask} id={todo.id}>❌</button></div>
                 </div>
             </div>
             </center>
        </>
    )
}
export default TodoList