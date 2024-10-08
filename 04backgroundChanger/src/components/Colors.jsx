import React, { useState } from 'react'

function Colors(){
    const [color,setColor] = useState("olive");
    return(
        <>
       <div className="w-full h-screen" style = {{ backgroundColor: color}}>
        <div className="flex inline bg-white pl-40 pr-10 rounded">
        <button className="bg-orange-800 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("orange")}>Orange</button>
        <button className="bg-red-800 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("red")}>Red</button>
        <button className="bg-blue-800 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("blue")}>Blue</button>
        <button className="bg-green-800 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("green")}>Green</button>
        <button className="bg-pink-800 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("pink")}>Pink</button>
        <button className="bg-white p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("white")}>White</button>
        <button className="bg-black text-white p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("black")}>Black</button>
        <button className="bg-yellow-400 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("yellow")}>Yellow</button>
        <button className="bg-gray-400 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("gray")}>Gray</button>
        <button className="bg-indigo-800 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("indigo")}>Indigo</button>
        <button className="bg-purple-800 p-2 m-3 border-2 border-gradient rounded-2xl" onClick={()=>setColor("purple")}>Purple</button>     
        </div>
        </div>
        </> 
    )
}
 
export default Colors