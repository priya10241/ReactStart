import React from "react"

function ContactUs(){
    return(
        <>
        <div className="block bg-[url('https://media.istockphoto.com/photos/-picture-id1311934969?k=6&m=1311934969&s=170667a&w=0&h=i0Lm9EfUfdZ95-VWnKauM4lgPUDul1oI9yDa7RUkIt0=')] bg-cover h-screen w-full">
            <h1 className="text-3xl font-bold text-slate-100 pt-10 font-sans ml-20">Contact Us</h1>
                <div className="block w-4/12 flex flex-row justify-start ml-10">
                    <form className="w-full">
                        <div className="flex flex-col gap-y-3">
                        <input type="text" id="name" className="text-gray-900 bg-slate-300 pt-1 pb-1 text-2xl pl-4 rounded-lg outline-0 mt-3 font-sans placeholder-gray-700" placeholder="Name"/>
                        <input type="email" id="email" className="text-gray-900 bg-slate-300 pt-1 pb-1 text-2xl pl-4 rounded-lg outline-0 mt-3 font-sans placeholder-gray-700" placeholder="Email"/>
                        <textarea type="text" rows="4" id="message" className="text-gray-900 bg-slate-300 pt-1 pb-1 text-2xl pl-4 rounded-lg outline-0 mt-3 font-sans placeholder-gray-700 " placeholder="Message"/>
                        <button type="submit" className="text-2xl text-white bg-emerald-500 rounded pl-2 pr-2 pt-1 pb-1 rounded-lg mt-1">Submit</button>
                        </div>
                    </form>
                </div>
        </div>
        </>
    )
}

export default ContactUs