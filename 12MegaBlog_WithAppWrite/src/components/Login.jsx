import React, { useState } from "react";
import {useDispatch} from "react-redux"
import {Link, useNavigate} from "react-router-dom"
import {login as authLogin} from "../store/AuthSlice"
import {Button , Logo, Input} from "./"
import {useForm} from "react-hook-form"
import authService from "../auth/auth_service";
function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error,setError] = useState(null);

    const login = async(data)=>{
        setError("");
        try{
            const session = await authService.login(data);
            const userData = await authService.getCurrentUser();
            if(session){
                dispatch(authLogin(userData));
                navigate("/");
            }
        }
        catch(error){
            setError(error);
        }

    }
    return(
        <>
        <div className="flex items-center w-full rounded justify-center">
            <div className="w-full flex mx-auto bg-gray-200 text-gray-900 rounded-xl p-10 border border-blue-700">
                <div className="mb-2 justify-center flex">
                    <span className="inline-block w-full">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="p-2 bg-gray-700 text-gray-100text-bold">Sign In to your Account</h2>
                <p className="m-2 text-center text-base text-black/20">
                Dont&apos; have an account?&nbsp;
                <Link className="text-bold bg-slate-100 text-blue-700 p-1 hover:underline" to="/signup">
                    Sign Up 
                </Link>
                </p>
                {error && <p className="text-red bg-white text-bold text-center">{error}</p>}
            </div>
            <form onSubmit={handleSubmit(login)} className="mt-8">
                <div className="cpace-y-5">
                    <Input type="email" className="text-black bg-gray-100 p-2 rounded" label="Email: " placeholder="Enter your email"
                     {...register("email",
                        {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        
                        })}/>
                    <Input type="password" className="text-black bg-gray-100 p-2 rounded" label="Password: " placeholder="Enter password"
                     {...register("password",
                        {
                            required: true,
                        })}/>
                    <Button type="submit" className="rounded-lg p-2 text-white bg-gray-700" children="Login"></Button>
                </div>
            </form>

        </div>
        </>
    )
}

export default Login;