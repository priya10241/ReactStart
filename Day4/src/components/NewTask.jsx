import { useState } from "react"

export default function NewTask({tasks, setTasks}){
    const [search, setSearch] = useState('');
    function handleSubmit(){
        if(search===''){
            return;
        }
        let mtasks = tasks.slice()
        mtasks.push(search);
        setTasks(mtasks);
        setSearch('');
    }
    return(
        <>
            <div style={{
                padding:'0px', 
                display:'flex',
                justifyContent:'center'
            }}>
                <input type='text' style={{fontSize:'30px', margin:'0px'}} value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                <button style={{
                    fontSize:'17px',
                    margin:'0px',
                    backgroundColor:'#535463'
                     }} onClick={handleSubmit} >Add</button>
            </div>
        </>
    )
}