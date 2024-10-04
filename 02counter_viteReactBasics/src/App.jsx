import { useState } from 'react'
// import './App.css'
//    cd 02counter_viteReactBasics
//    npm run dev


function App() {
  let [counter,setCounter] = useState(1);
      function addValue(){
        counter = counter+1;
        setCounter(counter);
        console.log("counter : " + counter);
      }

      function removeValue(){
        if(counter>0){
          counter = counter - 1;
          setCounter(counter);
          console.log("counter : " + counter);
        }
      }
  return (
    <>
      <p>Counter : {counter}</p>
      <button
      onClick={addValue}
      >Increase Value</button>
      <br></br>
      <br></br>
      <button
      onClick={removeValue}
      >Decrease Value</button>
    </>
  )
}
export default App