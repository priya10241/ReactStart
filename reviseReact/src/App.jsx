import { useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  const [password ,setPassword] = useState("abcdw672");
  useEffect(()=>{
    let allowedChars = "1234567890";
    if(symbolAllowed){
      allowedChars = allowedChars + "$#@&*^!";
    }
    if(CharAllowed){
      CharAllowed = CharAllowed + "abcdefghijklmnopqrstuvwxyz";
    }
    let newPassword = "";
    for(let i=0;i<length;i++){
      let index = Math.random() * (password.length);
      newPassword += allowedChars[index];
    }
    setPassword(newPassword);
  },[length,CharAllowed,symbolAllowed, setCharAllowed, setLength, setSymbolAllowed])
  return (
    <>
    <div>
      <label>Length: </label>
      <input type="range" max="16" min="2" onChange={(e) => setLength(e.target.value)} ></input>
      <br></br>
      <label>Char Allowed: </label>
      <input type="radio" onChange={(e)=>setCharAllowed(e.target.value)}></input>
      <br></br>
      <label>Symbol Allowed: </label>
      <input type="radio" onChange={(e)=>setSymbolAllowed(e.target.value)} ></input>
      <br></br>
      <label>Password: </label>
      <input type="text" value={password} readOnly ></input>
    </div>
    </>
  )
}

export default App
