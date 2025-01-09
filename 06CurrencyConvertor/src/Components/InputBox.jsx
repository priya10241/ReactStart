import { useEffect, useId, useState } from "react";
function InputBox(
    {currencyOptions,
        label,
        selectedcurrency="usd",
        setSelectedCurrency
    }
) {
    let id1 = useId();
    let id2 = useId();
    if(currencyOptions==undefined){
        currencyOptions = ["inr","usd"];
    }
    // let [selectedCurrency,setSelectedCurrency] = useState("usd");
    useEffect(()=>{
        setSelectedCurrency(selectedcurrency);
    },[selectedcurrency]);
    return(
        <>
            <div className='bg-slate-200 mt-5 rounded-lg w-3/4'>
                <div className='inline-block flex-col justify-evenly text-start p-5 pr-10'>
                    <div><label htmlFor={id1} className='text-1xl font-bold pl-1 text-slate-500'>{label}</label></div>
                    <div><input id={id1} type="text" className='border-2 rounded-lg border-black w-20 bg-slate-200 text-black pl-2'></input></div>
                </div>
                <div className='inline-block flex-col justify-evenly text-start p-5 pl-10'>
                    <div><label htmlFor={id2} className='text-1xl font-bold pl-1 text-slate-500'>Currency</label></div>
                    <div><select id={id2} value={selectedCurrency} onChange={(e)=>{
                        setSelectedCurrency(e.target.value);
                    }} className='border-2 rounded-lg border-black w-20 bg-slate-200 text-black pl-2'>
                       {
                       currencyOptions.map((cur)=>(
                            <option value={cur}>{cur}</option>
                        ))}

                    </select></div>
                </div>
            </div>
        </>
    )
}

export default InputBox;
