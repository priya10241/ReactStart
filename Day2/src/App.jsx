import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [elements, setElements] = useState([' ',' ',' ',' ',' ',' ',' ',' ',' '])
  let turn = 'X';
  function handleClick(id){

    const tst = elements
    tst[id] = turn;
    setElements(tst);
    console.log(elements[id]);
    if(turn=='X'){
      turn = 'O';
    }
    else{
      turn = 'X';
    }
  } 
  return (
    <>
    <button>{elements} </button>
      <div style={{display:'flex', flexDirection:'column',position: "fixed", 
          inset: 0, 
          margin: "auto", 
          width: "fit-content", 
          height: "fit-content" }}>
      <h2>Tic-Tac-Toe</h2>
      <div
        style={{ 
          display : 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap:0
        }}>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(0)} >{elements[0]}</button>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(1)} >{elements[1]}</button>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(2)} >{elements[2]}</button>
        </div>
        <div
        style={{ 
          display : 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap:0
        }}>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(3)} >{elements[3]}</button>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(4)} >{elements[4]}</button>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(5)} >{elements[5]}</button>
        </div>
        <div
        style={{ 
          display : 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap:0
        }}>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(6)} >{elements[6]}</button>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(7)} >{elements[7]}</button>
          <button style={{border: '1px solid black', height: '50px', width: '50px', fontSize: '40px'}}  onClick={()=>handleClick(8)} >{elements[8]}</button>
        </div>
      </div>
        
    </>
  )
}

export default App
