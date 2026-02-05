import { useEffect, useState } from 'react'
import './App.css'
import Button from './Button';

function App() {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const options = ['rock', 'paper', 'scissor'];
  const [result, setResult] = useState("Let's Start!");
  const [userChosen, setUserChosen] = useState('');
  const [compchosen, setcompChosen] = useState('');

  function findWinner(userChosen){
    const id = Math.floor(Math.random() * 3);
    setcompChosen(options[id]);
    let compChosen = options[id];
    if(userChosen==compChosen){
      setResult("Draw!!");
    }
    if(userChosen=='rock'){
      if(compChosen=='paper'){
        setCompScore(compScore+1);
        setResult("Computer Win");
      }
      else if(compChosen=='scissor'){
        setUserScore(userScore+1);
        setResult("User win!!");
      }
    }
    else if(userChosen=='paper'){
      if(compChosen=='rock'){
        setUserScore(userScore+1);
        setResult("User Win!!");
      }
      else if(compChosen=='scissor'){
        setCompScore(compScore+1);
        setResult("Computer win");
      }
    }
    else{
      if(compChosen=='paper'){
        setUserScore(userScore+1);
        setResult("User Win!!");
      }
      else if(compChosen=='rock'){
        setCompScore(compScore+1);
        setResult("Computer win!!");
      }
    }
  }

  return (
    <>
      <h1>Rock-Paper-Scissor</h1>
      <h2>User Score : {userScore}</h2>
      <h2>Computer Score : {compScore}</h2>
      <h2>{result}</h2>
      <div style = {{display:"flex", flexDirection:"row", justifyContent:"center", columnGap: "50px"}}>
        <Button value="Rock" handleClick={()=>{
          setUserChosen('rock');
          findWinner('rock');
          }}></Button>
        <Button value="Paper" handleClick={()=>{
          setUserChosen('paper');
          findWinner('paper');
          }}></Button>
        <Button value="Scissor" handleClick={()=>{
          setUserChosen('scissor');
          findWinner('scissor');
        }}></Button>
      </div>

      <div style = {{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <h2>User Chosen : {userChosen}</h2>
        <h2>Computer Chosen : {compchosen}</h2>
      </div>

    </>
  )
}

export default App
