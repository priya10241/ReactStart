
import Task from "./Task"
export default function DisplayTask({tasks, setTasks}){
    return(
        <>
            <div style={{
                padding:'30px', 
                display:'flex',
                justifyContent:'center',
                flexDirection:'column'
            }}>
            {tasks.map((task)=>
                <Task task={task} setTasks={setTasks} tasks = {tasks}/>
            )}
            </div>
        </>
    )
}