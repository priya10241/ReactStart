import { useState } from 'react'
import './App.css'
import NewTask from './components/NewTask'
import DisplayTask from './components/DisplayTask';

function App() {
  const [tasks, setTasks] = useState(['abcd','efgh','ijkl']);

  return (
    <>
      <NewTask tasks={tasks} setTasks={setTasks}/>
      <DisplayTask tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
