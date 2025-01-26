import React from 'react';
import {useDispatch} from 'react-redux';
import authService from '../../auth/auth_service';
import {logout}  from '../../store/AuthSlice';

function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout()
        .then(()=>{dispatch(logout())})
        .catch(()=>{console.log("Error in Logout Button")})
    }
    return(
        <button className="btn btn-danger text-white bg-blue-900 rounded-lg p-2" onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn;