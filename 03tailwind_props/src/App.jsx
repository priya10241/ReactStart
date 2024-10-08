import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  let heading="My first Card";
  let animalName = "Deer New";

  return (
    <>
      <Card heading={heading} animalName={animalName} />
    </>
  )
}
 
export default App
