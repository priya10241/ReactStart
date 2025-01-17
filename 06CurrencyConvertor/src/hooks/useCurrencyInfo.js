import { useState, useEffect } from "react";

function useCurrencyInfo(currency="inr"){
    let [data,setData] = useState({});
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        fetch(url)
        .then((res)=>{
            res.json()
            .then((r)=>{
                setData(r);
            })
        })
    },[currency]);
    // console.log(data[currency]);
    return data[currency];
} 
 
export default useCurrencyInfo;