import { useEffect, useId, useState } from "react";
function InputBox(
    allData, 
) {
    let currencyOptions = allData.currencyOptions;
    let lb = allData.label;
    let selectedCurrency = allData.selectedCurrency;
    let setSelectedCurrency = allData.setSelectedCurrency;
    let amount = allData.amount;
    let setAmount = allData.setAmount;
    let id1 = useId();
    let id2 = useId();
    if(currencyOptions==undefined){
        currencyOptions = ["inr","usd"];
    }
    let isRead = lb=="From"?false:true;
    // useEffect(()=>{
    //     setSelectedCurrency(selectedCurrency)
    // },[selectedCurrency])
    return(
        <>
            <div className='mt-5 rounded-lg w-1/2'>
                <div className='inline-block flex-col justify-evenly text-start p-5 pr-10'>
                    <div><label htmlFor={id1} className='text-1xl font-bold pl-1 text-slate-500'>{lb}</label></div>
                    <div><input id={id1} readOnly={isRead} value={amount} onChange={(e)=>{(setAmount(e.target.value))}} type="text" className='pr-5 border-2 rounded-lg border-black w-20 bg-slate-200 text-black pl-2'/></div>
                </div>
                <div className='inline-block flex-col justify-evenly text-start p-5 pl-10'>
                    <div><label htmlFor={id2} className='text-1xl font-bold pl-1 text-slate-500'>Currency</label></div>
                    <div>
                        <select id={id2} onChange={(e)=>{setSelectedCurrency(e.target.value)}} value={selectedCurrency} className='pr-5 border-2 rounded-lg border-black w-20 bg-slate-200 text-black pl-2'>
                            {
                            currencyOptions.map((cur)=>(
                                <option value={cur}>{cur}</option>
                            ))
                            }
                    </select></div>
                </div>
            </div>
        </>
    )
}

export default InputBox;
