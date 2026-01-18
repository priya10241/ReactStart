import { useState } from 'react'
import { useEffect } from 'react';
import TimeCard from './TimeCard';

function App() {
  const [color, setColor] = useState('green');
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
  useEffect(()=>{
    setInterval(()=>{
      setCurrTime(new Date().toLocaleTimeString());
    },1000)
  },[])
  return (
    <>
      <select onChange={(e)=>setColor(e.target.value)}>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='red'>Red</option>
      </select>

      <TimeCard time={currTime} color={color}/>
      
    </>
  )
}

export default App
