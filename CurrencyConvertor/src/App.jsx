import { useState } from 'react'
import './Components/InputBox.jsx'
import './App.css'

function App() {
    

    return (
        <>
        <div className='h-screen bg-[url("https://png.pngtree.com/background/20220727/original/pngtree-growing-chart-against-the-background-of-the-usa-america-flag-candlestick-picture-image_1843337.jpg")]' >
          <h1 className='text-white text-3xl font-bold text-center pt-10'>Currency Convertor</h1>
            <center>
              <div className='flex-row justify-around p-10 bg-white rounded-lg w-1/2  text-black'>
                  <div className='bg-slate-100 mt-5 rounded-lg'>
                      <div className='inline-block flex-col justify-evenly text-start p-5 pr-10'>
                        <div><label for="from" className='text-1xl font-bold pl-1 text-slate-500'>From</label></div>
                        <div><input id="from" type="text" className='border-2 rounded-lg border-black w-20 bg-slate-200 text-black pl-2'></input></div>
                      </div>
                      <div className='inline-block flex-col justify-evenly text-start p-5 pl-10'>
                        <div><label for="from" className='text-1xl font-bold pl-1 text-slate-500'>Currency</label></div>
                        <div><select className='border-2 rounded-lg border-black w-20 bg-slate-200 text-black pl-2'>
                          <option value="USD">usd</option>
                          <option value="inr">inr</option>
                          </select></div>
                      </div>
                  </div>

                  <button className='bg-blue-800 text-1xl font-bold text-white p-2 rounded'>Swap</button>

                  <div className='bg-slate-100 rounded-lg'>
                      <div className='inline-block flex-col justify-evenly text-start p-5 pr-10'>
                        <div><label for="to" className='text-1xl font-bold pl-1 text-slate-500'>To</label></div>
                        <div><input id="to" type="text" readOnly className='border-2 rounded-lg border-black w-20 bg-slate-200 text-black pl-2'></input></div>
                      </div>
                      <div className='inline-block flex-col justify-evenly text-start p-5 pl-10'>
                        <div><label for="from" className='text-1xl font-bold pl-1 text-slate-500'>Currency</label></div>
                        <div><select className='border-2 rounded-lg border-black w-20 bg-slate-200 text-black pl-2'>
                          <option value="USD">usd</option>
                          <option value="inr">inr</option>
                          </select></div>
                      </div>
                  </div>
              </div>
            </center>
        </div>
        </>
    );
  }

export default App
