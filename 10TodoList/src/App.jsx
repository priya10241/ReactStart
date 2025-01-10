import { useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import { useEffect } from 'react';

function App() {
  const [Todos,setTodos] = useState([]);

  const AddTodo = (todo)=>{
    setTodos((prev)=>[...prev,{id:Date.now(),tittle:todo,complete:false}]);
  }
  const UpdateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((td)=> td.id===id?{tittle:todo,...td}:prev));
  }
  const RemoveTodo = (id)=>{
    setTodos((prev)=> prev.filter((td)=>td.id!==id));
  }
  const ToggleTodo = (id)=>{
    setTodos((prev)=> prev.map((td)=> td.id===id?{complete:!td.complete,...td}:prev));
  }

  useEffect(()=>{
    
  },[Todos])
  return (
    <TodoContextProvider value={{Todos,AddTodo,UpdateTodo,RemoveTodo,ToggleTodo}}>
      <div className='h-screen w-screen bg-gray-300'>
      <TodoForm/>
      </div>
    </TodoContextProvider>
  )
}

export default App
