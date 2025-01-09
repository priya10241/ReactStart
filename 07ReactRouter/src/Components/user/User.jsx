import { useParams } from "react-router"

function User(){
    const {id} = useParams();
    return(
        <>
            <center><div className="text-2xl text-red-700 mt-20">"user/{id}": Not a Valid Url</div></center>
        </>
    )
}
export default User