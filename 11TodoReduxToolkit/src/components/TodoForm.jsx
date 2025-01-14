import React,{ useState } from 'react'
import {addTodo}  from '../features/slice/todoSlice'
import {useDispatch} from 'react-redux'

const TodoForm = ()=>{
    const [input,setInput] = useState('');
    const dispatch = useDispatch();
    const addNewTodo = ()=>{
        dispatch(addTodo(input));
        setInput('');
    }

    return( 
        <>
        <center>
        <h1 className="text-gray-800 font-bold text-2xl pt-5">Manage Your Todos</h1>
        <input type = "text" placeholder="Enter Todo" value={input} onChange={(e)=>{setInput(e.target.value)}} className="text-2xl text-slate-950 rounded-l pl-2 border-2 outline-2 border-gray-500 outline-gray-500 mt-10 w-2/5"/>
        <button type="button" className="pl-2 pr-2 text-2xl bg-[#698474] text-white rounded-r border-2 border-[#698474] " onClick={addNewTodo}>Submit</button>
        </center>
        </>
    )
}

export default TodoForm;