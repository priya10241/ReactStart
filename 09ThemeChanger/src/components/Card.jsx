function Card(){
    return(
        <>
        <center>
            <div className="bg-slate-200 h-screen w-creen">
                <div className="align-middle font-bold text-slate-800 bg-slate-300 inline-block w-1/2 pt-5 pb-5 rounded text-1xl mt-20 pl-2 pr-2">
                    <h1 className="text-teal-600" >Welcome User</h1>
                    <div className="flex flex-row gap-x-2 rounded">
                        {/* <div> */}
                            <img src="https://cdn.africatravelresource.com/cdn/05explore/locations-and-lodges/africa/india/pench/tuli-tiger-corridor-pench/0/stills/11pench/027PEN-IM1002-tuli-tiger-corridor-pench-1475.jpg" alt="image" className="rounded"height={200} width={150}/>
                        {/* </div> */}
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque harum aut eum id quos quis dicta
                            accusamus ab itaque cumque ipsa eligendi, blanditiis alias cum, quae reprehenderit soluta voluptatum.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        </div>
                    </div>
                </div>
            </div>
        </center>
        </>
    )
}

export default Card