import React, { useContext } from "react";
import UserContext from "../usercontext/UserContext";

function Profile(){
    let {user} = useContext(UserContext);
    if(user!=null && user.username!=''){
        return(
            <center><div className="bg-slate-200 block w-1/2 p-5 text-2xl text-black rounded-lg">Hello {user.username}</div></center>
        )
    }
    else{
        return(
            <center><div className="bg-slate-200 block w-1/2 p-5 text-2xl text-black rounded-lg">Please Login</div></center>
        )
    }
}

export default Profile