import {NavLink} from 'react-router'
import useThemeContext from '../contexts/ThemeContext'

function Header(){
    let {themeMode,setThemeMode} = useThemeContext();
    const changeTheme = ()=>{
        if(themeMode=='light'){
            setThemeMode('dark');
        }
        else{
            setThemeMode('light');
        }
    }
    return(
        <>
        <div className='flex flex-row justify-center gap-x-8 bg-slate-200 text-slate-850 pt-2 pb-2 rounded text-2xl font-bold pt-5 '>
            <NavLink to='/' className={({isActive})=>
               `hover:text-red-700 ${isActive?"text-red-700":"text-slate-850"}`
            }  >Home</NavLink>
            <NavLink to='/card' className={({isActive})=>
               `hover:text-red-700 ${isActive?"text-red-700":"text-slate-850"}`}>Card</NavLink>
            <button type="button" className='pl-2 pr-2 rounded bg-teal-700 text-white ml-20' onClick={changeTheme}>Dark</button>
        </div>
        </>
    )
}

export default Header