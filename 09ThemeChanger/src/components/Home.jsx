import useThemeContext from "../contexts/ThemeContext";

function Home(){
    let {themeMode,setThemeMode} = useThemeContext();
    const changeTheme = ()=>{
        // console.log(themeMode);
          if(themeMode=='light'){
              setThemeMode('dark');
          }
          else{
              setThemeMode('light');
          } 
      }
      
    return(
        <>
        <center>
            <div className=" h-screen w-screen">
                <div className="align-middle font-bold inline-block w-1/2 pt-5 pb-5 rounded text-1xl mt-20">
                    <h1 className="text-teal-600" >Welcome User</h1>
                    <div className="dark:bg-gray-800 dark:text-white bg-slate-200 text-gray-850">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eaque harum aut eum id quos quis dicta
                        accusamus ab itaque cumque ipsa eligendi, blanditiis alias cum, quae reprehenderit soluta voluptatum.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis placeat maiores harum asperiores aut itaque,
                        perferendis a quod commodi reprehenderit? Ea officia architecto ipsa est, placeat omnis eum consequuntur nulla.
                    </div>
                    <button type="button" className='pl-2 pr-2 rounded bg-teal-700 text-white ml-20' onClick={changeTheme}>{`${themeMode=='light'?'Dark':'light'}`}</button>
                </div>
            </div>
        </center>
        </>
    )
}

export default Home