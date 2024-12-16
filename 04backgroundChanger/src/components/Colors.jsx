import React, { useState } from 'react'

function Colors(){
    const [color,setColor] = useState("olive");
    return(
        <>
       <div className="w-full h-screen" style = {{ backgroundColor: color}}>
        <div className="flex inline bg-white pl-40 pr-10 rounded">
        <button className="p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
        <button className="p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button className=" p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
        <button className=" p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button className="p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
        <button className=" p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"white"}} onClick={()=>setColor("white")}>White</button>
        <button className="text-white p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"black"}} onClick={()=>setColor("black")}>Black</button>
        <button className=" p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
        <button className=" p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"gray"}} onClick={()=>setColor("gray")}>Gray</button>
        <button className=" p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"indigo"}} onClick={()=>setColor("indigo")}>Indigo</button>
        <button className=" p-2 m-3 border-2 border-gradient rounded-2xl" style = {{background:"purple"}} onClick={()=>setColor("purple")}>Purple</button>     
        </div>
        </div>
        </> 
    )
}
 
export default Colors