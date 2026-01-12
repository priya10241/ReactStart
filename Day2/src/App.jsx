import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [elements, setElements] = useState([' ',' ',' ',' ',' ',' ',' ',' ',' '])
  const [turn, setTurn] = useState('X');
  const [isWin, setIsWin] = useState(false);
  const [winnerDeclare, setWinnerDeclare] = useState('Winner:  ');
  function handleClick(id){
    if(elements[id]!=' ' || isWin){
      return;
    }
    const tst = [];
    for(let i=0;i<9;i++){
      tst.push(elements[i]);
    }
    tst[id] = turn;
    setElements(tst);
    checkLogic(tst);
    if(!isWin){
      if(turn=='X'){
        setTurn('O');
      }
      else{
        setTurn('X');
      }
    }
  } 
  function checkLogic(ele){
    let pairs = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]];
    for(let i=0;i<8;i++){
      let a1 = pairs[i][0];
      let a2 = pairs[i][1];
      let a3 = pairs[i][2];
      if(ele[a1]==turn && ele[a2]==turn && ele[a3]==turn){
        setIsWin(true);
        setWinnerDeclare(`Winner : ${turn}`)
        return;
      }
    }
  }
  function restartGame(){
    setElements([' ',' ',' ',' ',' ',' ',' ',' ',' ']);
    setIsWin(false);
    setWinnerDeclare('Winner:  ');
    setTurn('X');
  }
  return (
    <>
      <div style={{display:'flex', flexDirection:'column',position: "fixed"}}>
      <h2>{winnerDeclare}</h2>
      <h2>Tic-Tac-Toe</h2>
      <button onClick={restartGame}>Restart</button>
      <h2> Turn : {turn}</h2>
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
