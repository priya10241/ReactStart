export default function Buttons({dir, setDir}){
    return(
        
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:'center', columnGap:'5px'}}>
            <button type='button' 
                style={{border:'1px solid blue'}}
                onClick={()=>setDir(-1)}
                disabled = {dir==1}>
                    <img src='\Arrows\leftArrow.png' height="30px" width="30px"/>
                </button>
            <button type='button' 
                style={{border:'1px solid blue'}}
                onClick={()=>setDir(1)}
                disabled = {dir==-1}>
                    <img src='\Arrows\rightArrow.png' height="30px" width="30px"/>
                </button>
            <button type='button' 
                style={{border:'1px solid blue'}}
                onClick={()=>setDir(-40)}
                disabled = {dir==40}>
                    <img src='\Arrows\upArrow.png' height="30px" width="30px"/>
                </button>
            <button type='button' 
                style={{border:'1px solid blue'}} 
                onClick={()=>setDir(+40)}
                disabled = {dir==-40}>
                    <img src='\Arrows\downArrow.png' height="30px" width="30px"/>
                </button>
        </div>
        </>
    )
};