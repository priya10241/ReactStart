import UserContext from "../usercontext/UserContext";
import React from "react";
import { useContext, useState } from "react"
function User(){
    let [username,setUsername] = useState('');
    let [password,setPassword] = useState('');
    let {setUser} = useContext(UserContext);
    const handleSubmit = ()=>{
        setUser({username,password});
        console.log(username);
    }
    return (
        <>
            <center>
            <div className="bg-slate-200 block w-1/2 mt-20 text-2xl text-black rounded-lg"> 
                <h1 className="text-blue-500 font-bold">Login</h1>
                <input type="text" className="border-2 border-slate-950" placeholder="Name" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                <br/>
                <br/>
                <input type="password" className="border-2 border-slate-950" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <br/>
                <br/>
                <button className="bg-blue-700 text-white font-bold text-2xl rounded p-2" onClick={handleSubmit}>Submit</button>
            </div>
            </center>
        </>
    )
}

export default User