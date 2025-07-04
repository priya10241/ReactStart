import React from "react";
import {Link} from "react-router-dom"
import service from "../appwrite/config";
function PostCard({$id, tittle, featuredImage}){
    return(
        <>
        <Link to={`/post/${$id}`}>
            <div className="w-full p-2 rouded">
                <div className="w-full mb-4 justify-center ">
                    <img src={`${service.filePreview(featuredImage)}`} alt="" />
                </div>
                <h2 className="p-2 text-xl font-bold text-gray-700 bg-slate-200">{tittle}</h2>
            </div>
        </Link>
        </>
    )
}

export default PostCard