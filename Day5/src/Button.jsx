
export default function Button({value, handleClick}){
    return(
        <>
        <button style={{backgroundColor: "#97bed1" , color: "#111111"}} onClick={handleClick}>{value}</button>
        </>
    )
}