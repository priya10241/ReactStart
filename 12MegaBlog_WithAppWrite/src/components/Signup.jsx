import React from "react"
import { useDispatch } from "react-redux"
import {Link, useNavigate} from "react-router-dom"
import authService from "../auth/auth_service"
import {Button , Logo , Input} from "./"
import {useForm} from "react-hook-form"
import { login } from "../store/AuthSlice"
function Signup(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error,setError] = useState(null);

    const create = async(data)=>{
        setError("");
        try{
            const session = await authService.createAccount(data);
            const userData = authService.getCurrentUser();
            if(userData){
                dispatch(login(userData));
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
                <div className="mb-2 justify-center flex">
                Already have an account?&nbsp;
                <Link to="/login" className="text-bold bg-slate-100 text-blue-700 p-1 hover:underline">
                Login
                </Link>
                </div>
            </div>
            <form onSubmit={handleSubmit(create)} className="mt-8">
                <Input type="text" className="p-2 rounded m-2 bg-gray-100 text-slate-800" label="Name: " placeholder="Enter your name"
                 {...register("name",
                    {
                        required: true
                    })
                 }/>
                 <Input type="email" className="p-2 rounded m-2 bg-gray-100 text-slate-800" label="Email: " placeholder="Enter email"
                 {...register("email",
                    {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })
                 }/>
                <Input type="password" className="rounded m-2 bg-gray-100 text-slate-800" label="Password: " placeholder="Enter password"
                 {...register("password",
                    {
                        required: true
                    })
                 }/>
                 <Button type="submit" className="bg-blue-400 text-white rounded p-2">Create Account</Button>
            </form>
        </div>
        </>
    )
}

export default Signup