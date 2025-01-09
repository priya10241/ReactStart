import UserContext from "./UserContext";
import React from "react";
import {useState} from 'react';

const UserContextProvider = ({children})=>{
    let [user,setUser] =  useState(null);
    return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider

