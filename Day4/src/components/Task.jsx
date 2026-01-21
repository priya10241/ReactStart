import { useState } from "react";

export default function Task({task, tasks, setTasks}){
    const [isDone, setIsDone] = useState(false);
    function handleDelete(){
        const index = tasks.indexOf(task);
        let mtasks = tasks.slice();

        if (index > -1) {
            mtasks.splice(index, 1); 
        }
        setTasks(mtasks);
    }
    function handleDone(){
        let newDone = !isDone;
        setIsDone(newDone);
        if(newDone){
            document.getElementById(task).style.textDecoration = "line-through"
        }
        else{
            document.getElementById(task).style.textDecoration = "none"
        }
    }
    return (
        <>
            <div style={{
                padding:'10px', 
                display:'flex',
                justifyContent:'center'
            }}>
                <input type='text' id={task} readOnly style={{fontSize:'30px', margin:'0px'}} value={task}/>
                <button style={{
                    fontSize:'17px',
                    margin:'0px',
                    backgroundColor:'#535463'
                     }} onClick={handleDelete}>Delete</button>
                <button style={{
                    fontSize:'17px',
                    margin:'0px',
                    backgroundColor:'#535463'
                     }} onClick={handleDone}>{!isDone ? "Mark as Done" : "Mark Undone"}</button>
            </div>
        </>
    )
}