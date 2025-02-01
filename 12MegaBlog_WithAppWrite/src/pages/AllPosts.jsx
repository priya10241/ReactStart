import React, { useEffect, useState } from "react";
import appWriteService from "../auth/config"
import {Container, PostCard} from "../components";
export default function AllPosts(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        appWriteService.getPosts([])
        .then((posts)=>{
            if(posts){
            setPosts(posts.documents);
            }
        })
    },[posts])
    return(
        <>
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                {posts.map((post)=>{
                    <div className="p-2 w-1/4" key={post.$id}><PostCard post={post}/></div>
                })}
                </div>
            </Container>
        </div>
        </>
    )
}