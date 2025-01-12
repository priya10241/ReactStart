import { useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import { useEffect } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [Todos,setTodos] = useState([]);

  const AddTodo = (todo)=>{
    const d = Date.now();
    setTodos((prev)=>[...prev,{id:d,tittle:todo,complete:false}]);
  }
  const UpdateTodo = (id,newtodo)=>{
    setTodos((prev)=> prev.map((td)=> td.id===id?{...td,tittle:newtodo}:td));
  }
  const RemoveTodo = (id)=>{
    setTodos((prev)=> prev.filter((td)=>td.id!==id))

  }
  const ToggleTodo = (id)=>{
    setTodos((prev)=> prev.map((td)=> td.id===id?{...td,complete:!td.complete}:td));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos))
  }, [Todos])
 
  return (

    <TodoContextProvider value={{Todos,AddTodo,UpdateTodo,RemoveTodo,ToggleTodo}}>
      <div className='h-screen w-screen bg-stone-200'>
      <TodoForm/>
      {Todos.map((td)=><TodoItem todo={td}/>)}
      </div>
    </TodoContextProvider>
  )
}

export default App
