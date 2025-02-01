import React,{useState, useEffect} from "react";
import {Container,PostCard} from "../components"
import { useNavigate, useParams } from "react-router-dom";
import appWriteService from "../auth/config"
import { Query } from "appwrite";

export default function EditPost(){
    const [posts,setPosts] = useState([]);
    const navigate = useNavigate();
    const {slug} = useParams();
    useEffect(()=>{
        if(slug){
            appWriteService.getPost(slug)
            .then((posts)=>{
                if(posts){
                    setPosts(posts);
                }
            })
        }
        else{
            navigate("/")
        }
    },[slug, navigate])
    return posts? (
        <div className="py-8">
            <Container>
                <PostCard post={posts}/>
            </Container>
        </div>
    ): null
}