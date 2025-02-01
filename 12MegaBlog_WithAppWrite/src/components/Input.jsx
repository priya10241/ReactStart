import { ReactReduxContext } from "react-redux";
import { useId } from "react";
import React from "react";

const Input = React.forwardRef(
    function Input({
        label,
        type="text",
        className = "",
        ...props
    }, ref)
    {
        const userId = useId();
        return(
            <>
            <div className="w-full">
                {label && (
                    <label className="inline-block pl-1 mb-1" htmlFor={userId}>{label}</label>
                )}
            </div>
            <input type={type} id={userId} className={`pl-4 pr-4 pt-2 pb-2 rounded-lg ${className} `} ref={ref} {...props}></input>
            </>
        )
    }
);

export default Input;