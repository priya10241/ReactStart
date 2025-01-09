import { useState,useEffect} from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
    let [currency,setCurrency] = useState("usd");
    let data = useCurrencyInfo(currency);
    let [options,setOptions] = useState([]);
    useEffect(() => {
      if (data !== undefined) {
        let op = Object.keys(data);
        setOptions(op);
      }
    }, [data]);
    return (
      <> 
      <center>
          
          <div className='bg-slate-100 flex flex-col justify-between w-1/2 rounded-lg  mt-10 inline-block'>
          <h1 className='text-blue-700 font-bold text-3xl '>Currency Convertor</h1>
          <div className='bg-slate-200 inline-block h-800 flex justify-center rounded-lg '>
          <InputBox currencyOptions ={options} label="From" selectedcurrency={currency} setSelectedCurrency = {setCurrency}/>
          </div>
          <div className='bg-slate-200 inline-block h-800 flex justify-center rounded-lg '>
          <InputBox currencyOptions ={options} label="To" selectedcurrency='inr'/>
          </div>
          </div>
      </center>
      </>
    );
  }

export default App
