import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
//https://www.colorscab.com/wp-content/uploads/2023/07/NicePng_user-icon-png_1280406-1024x1024.png
let url = "https://api.github.com/users/hiteshchoudhary";
function Github(){
    // let [data,setData] = useState('null');
    // let url = "https://api.github.com/users/hiteshchoudhary";
    // fetch(url).then((d)=>{
    //     let result = d.json();
    //     result.then((dt)=>{
    //             setData(dt);
    //     })
    // })
    let data = useLoaderData();
    return(
        <>
        <div className="h-full w-full bg-[url('https://th.bing.com/th/id/OIP.prBUW9BYv2Vucs1esYzoOAHaE7?w=2000&h=1333&rs=1&pid=ImgDetMain')] bg-cover">
            <center> <h1 className='text-slate-100 text-2xl font-bold font-sans pt-5'>{data.name}</h1>
                <div className='block w-2/3 flex flex-row gap-x-1 mt-10'>
                    <div className=' block bg-white p-2 rounded'>
                        <img src={data.avatar_url} alt="image" width={300} height={300}/>
                    </div>
                    <div className='text-slate-100 text-1xl font-mono'>
                        <h3 className='font-bold'>Followers: {data.followers}</h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sunt blanditiis ullam ex beatae voluptatem porro magni quia sapiente, quasi vitae commodi suscipit? 
                        Inventore totam, quia illum est autem  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, ipsum! Dolorum cum, blanditiis, animi voluptate facilis laborum voluptas iusto 
                        saepe aliquid laboriosam fuga optio sapiente quae a molestias, provident inventore.
                    </div>
                </div>
            </center>
        </div>
        </>
    )
}

export const githubInfoLoader = async ()=>{
    const response = await fetch(url);
    return response.json();
}
export default Github;
