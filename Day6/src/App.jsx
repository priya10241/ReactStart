import { useState , useEffect} from 'react'
import './App.css'
import Buttons from './components/Buttons';

function App() {
  const gridSize = 40; 
  const cellSize = 10; 
  const [isPaused, setIsPaused] = useState(false);
  const [foodIndices, setFoodIndices] = useState(Math.floor(Math.random()*1600));
  const [snakeIndices, setSnakeIndices] = useState([1,0]);
  const [headdir, setHeadDir] = useState(1); //1->right, -1 -> left, -40->up, 40->bottom
  const [isGameOver, setIsGameOver] = useState(false);
  const boundaryIdLeft = [0,40, 80, 120, 160, 200, 240, 280, 320, 360, 400, 440, 480, 520, 560, 600, 640, 680, 720, 760, 800, 840, 880, 920, 960, 1000, 1040, 1080, 1120, 1160, 1200, 1240, 1280, 1320, 1360, 1400, 1440, 1480, 1520, 1560];
  const boundaryIdRight = [39, 79, 119, 159, 199, 239, 279, 319, 359, 399, 439, 479, 519, 559, 599, 639, 679, 719, 759, 799, 839, 879, 919, 959, 999, 1039, 1079, 1119, 1159, 1199, 1239, 1279, 1319, 1359, 1399, 1439, 1479, 1519, 1559, 1599];
  function Restart(){
    setFoodIndices(Math.floor(Math.random()*1600));
    setSnakeIndices([1,0]);
    setIsGameOver(false);
    setHeadDir(1);
    setIsPaused(false);
  }

  useEffect(()=>{
    if(!isPaused){
      const intervalId = setTimeout(()=>{
        let lastVal = snakeIndices[snakeIndices.length-1];
        let newSnakeInd = [...snakeIndices];
        for(let i=1;i<newSnakeInd.length;i++){
          newSnakeInd[i] = snakeIndices[i-1];
        }
        newSnakeInd[0] = newSnakeInd[0] + headdir;
        if(newSnakeInd[0] == foodIndices){
          newSnakeInd.push(lastVal);
          setFoodIndices(Math.floor(Math.random()*1600));
        }
        setSnakeIndices(newSnakeInd);
        const headId = newSnakeInd[0];
        if(headId<0 || headId>=1600 || (boundaryIdRight.includes(headId) && headdir==-1) || (boundaryIdLeft.includes(headId) && headdir==1)){
          setIsGameOver(true);
        }
      },1000);
    return ()=>clearInterval(intervalId);
    }
  })
  if(isGameOver){
    return(
      <>
      <h2>Game Over!!</h2>
      <button onClick={Restart} style={{backgroundColor:"#d4e2ee"}}>Start Again</button>
      </>
    )
  }
  else{
  return (
    <>
    <h2 style={{margin:'0.5px'}}>Snake Game</h2>
    <div style={{height:'500px', width:'400px', display:'flex', flexDirection:'column', rowGap:'5px'}}>
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
      <button onClick={Restart} style={{backgroundColor:"#9ae6cc"}}>Start Again</button>
      <button onClick={()=>setIsPaused(!isPaused)} style={{backgroundColor:"#9ae6cc"}}>{!isPaused ? 'Pause' : 'Continue' }</button>
      </div>
      <div 
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${gridSize}, ${cellSize}px)`,
        width: '400px',
        height: '400px',
        border: '2px solid #333',
        backgroundColor: '#91a3a8'
      }}
    >
      {Array.from({ length: gridSize * gridSize }).map((_, index) => {
        let backgroundColor = '#91a3a8';
        let border = '0px';
        if(snakeIndices.includes(index)){
          backgroundColor = '#14d814';
          border = '1px solid black';
        }
        if(foodIndices==index){
          backgroundColor = '#ff0000'
        }
        if(snakeIndices[0]==index){
          backgroundColor = '#057a05'
        }
        return (
          <div 
            key={index} 
            style={{
              width: cellSize,
              height: cellSize,
              border : border,
              backgroundColor: backgroundColor,
            }} 
          ></div>
        );
      })}
    </div>
    <Buttons dir={headdir} setDir={setHeadDir}/>
    </div>
    </>
  )
}
}

export default App

