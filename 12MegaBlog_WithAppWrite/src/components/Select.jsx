import React, { forwardRef } from 'react'
import {useId} from "react"

function Select(
    options,
    className,
    label,
    ...props
){
    const id = useId();
    return(
        <>
        <label htmlFor={id} className='text-slate-200 bg-gray-800 p-2 '>{label}</label>
        <Select id={id} className={` bg-slate-200 text-gray-800 p-2 ${className}`}>
            {options? options.map((option)=>(
                <option key={option} value={option} >{option}</option>
            )):null}
        </Select>
        </>
    )
}

export default forwardRef(Select);