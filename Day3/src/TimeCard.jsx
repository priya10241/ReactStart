
export default function TimeCard({time, color}){
    return(
        <>
        <h2>Current Time:</h2>
        <h1 style={{color: color}}>{time}</h1>
        </>
    )
};