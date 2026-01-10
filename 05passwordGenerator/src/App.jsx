import { useState, useCallback,useEffect, useRef} from 'react'
import './App.css'
function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("abcd");


  const cachedFun = useCallback(()=>{
    console.log("length:" + length);
    console.log("number:" + numberAllowed);
    console.log("char:" + charAllowed);
    let str = "";
    let pass = "";
    str += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789";
    }
    if(charAllowed){
      str += "!@3$%^&*_-?~";
    }
    let n = str.length;
    for(let i=0;i<length;i++){
      let index = Math.random() * n;
      pass = pass + str.charAt(index);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword]);

  useEffect(()=>{
    cachedFun();
  },[length,numberAllowed,charAllowed])

const passwordReference = useRef(null);

const copyToClipboard = useCallback(()=>{
  window.navigator.clipboard.writeText(password);
  passwordReference.current?.select();
},[password]);
  
  return (
    <>
    <div className="flex justify-start flex-col w-full h-screen bg-blue-900 text-yellow-500 pt-10">
    <div className='flex justify-center mt-10'><h1 className="text-4xl align-items-center pl-90">Password Generator</h1></div>
    <div>
      <div className='flex justify-center mt-10'>
        <input className="w-80 bg-white text-blue-800 pl-5 rounded-l-lg  text-3xl" type="text" value={password} placeholder='Password' ref={passwordReference} readOnly />
        <button type="button" className='text-white bg-black text-3xl pl-4 pr-4 rounded-r-lg' onClick={copyToClipboard}>Copy</button>
      </div>
      <div className='flex justify-center mt-10 text-2xl'>
        <div className='flex justify-start text-white w-80'>
          <input type='range' value={length} max={16} min={6} onChange={(e)=>{
          setLength(e.target.value)}}/>
          <label >Length:{length}</label>
        </div>
        <div className='flex justify-start text-white w-40'>
          <input className="text-2xl" type="checkbox" defaultChecked={numberAllowed} id="Number" onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}/>
          <label>Number</label>
        </div>
        <div className='flex justify-start text-white w-40'>
          <input className="text-2xl" type="checkbox" defaultChecked={charAllowed} id="Character" onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}/>
          <label>Character</label>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
