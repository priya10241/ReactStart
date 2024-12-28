import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("White");

  return (
    <>
    <div className='h-screen' style={{backgroundColor : color}}>
      <h1 className='font-bold text-5xl'>Background Changer</h1>
      <br></br>
      <br></br>
      <div className='flex-row w-1/2 justify-evenly'>
        <button className='rounded border-black text-2xl text-white p-2 mr-10' style={{backgroundColor:"green"}} onClick={()=>{
          setColor("green");
        }}>Green</button>
        <button className='bg-blue-800 rounded border-black text-2xl text-white p-2 mr-10' style={{backgroundColor:"blue"}} onClick={()=>{
          setColor("blue");
        }}>Blue</button>
        <button className='bg-red-800 rounded border-black border text-2xl text-white p-2 mr-10' style={{backgroundColor:"red"}} onClick={()=>{
          setColor("red");
        }}>Red</button>
      </div>
      </div>
    </>
  )
}

export default App
