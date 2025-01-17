import { useState,useEffect} from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
//
function App() {
    let [currency,setCurrency] = useState("usd");
    let [resultCurreny,setResultCurrency] = useState("inr");
    let [amount,setAmount] = useState(0);
    let [resultAmount,setResultAmount] = useState(0);
    let data = useCurrencyInfo(currency);
    let [options,setOptions] = useState([]);

      useEffect(() => {
        if (data !== undefined) {
          let op = Object.keys(data);
          setOptions(op);
        }
      }, [data,resultAmount,currency,amount,resultCurreny]);
    
    const convert = ()=>{
          let multiplyFactor = data[resultCurreny];
          console.log(multiplyFactor);
          setResultAmount(Math.floor(multiplyFactor * amount));
    }
    let lb1 = "From";
    let lb2 = "To";
    return (
      <> 
      <center>
          
          <div className='bg-sky-100 flex flex-col justify-between w-1/2 rounded-lg  mt-10 inline-block'>
          <h1 className='text-cyan-900  font-bold text-3xl pb-5 pt-3'>Currency Convertor</h1>
          <div className='bg-sky-100 inline-block h-800 flex justify-center rounded-lg '>
          <InputBox currencyOptions ={options} label={lb1} selectedCurrency={currency} setSelectedCurrency={(c)=>{setCurrency(c)}} amount={amount} setAmount={(a)=>{setAmount(a)}}/>
          </div>
          <div className='bg-sky-100 inline-block h-800 flex justify-center rounded-lg '>
          <InputBox currencyOptions ={options} label={lb2} selectedCurrency={resultCurreny} setSelectedCurrency={(c)=>{setResultCurrency(c)}} amount={resultAmount} setAmount={(a)=>{setResultAmount(a)}} />
          </div>
          <button type="button" className='bg-teal-900 text-slate-100 p-2 rounded-lg' onClick={convert}>CONVERT USD TO INR</button>
          </div>
      </center>
      </>
    );
  }

export default App
