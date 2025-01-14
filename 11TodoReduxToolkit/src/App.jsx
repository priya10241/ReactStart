import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector(state=>state.todos);
  console.log(todos)

  return (
    <>
    <div className='h-screen w-screen bg-stone-200'>
      <TodoForm/>
      {
            todos.map((td)=><TodoList todo={td}/>)
      }
    </div>
    </>
  )
}

export default App
