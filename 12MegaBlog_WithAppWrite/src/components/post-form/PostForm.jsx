import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import Input from "../Input"
import Button from "../Button"
import RTE from "../RTE"
import {useSelector} from "react-redux"
import appWriteService from "../../auth/config"
export default function PostForm({post}){
    const {register, handleSubmit, watch , setValue, control, getValues} = useForm({
        defaultValues: {
            tittle: post?.tittle || " ",
            slug: post?.slug || " ",
            content: post?.content || " ",
            status: post?.status || "active"
        }
    });

    const navigate = useNavigate();
    const userData = useSelector(state=>state.auth.status);

    const submit = async(data)=>{
        if(post){
            const file = await appWriteService.uploadFile(
                data.image[0] ? data.image[0] : null
            )

            if(file){
                appWriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appWriteService.updatePost(post.$id, {
                ...data, featuredImage : file ? file.$id : undefined
            })

            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else{
            const file = await appWriteService.uploadFile(data.image[0])
            if(file){
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appWriteService.createPost(
                    {
                        ...data, userId : userData.$id
                    }
                )
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }

            }
        }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value=='string'){
            return value
                .trim()
                .toLowerCase()
                .replace(/^[a-zA-Z\d\s]+/g,'-')
                .replace(/\s/g,'-')

        }
        return '';
    },[])

    useEffect(()=>{
        const subscription = watch((value, {name})=>{
            if(name=='tittle'){
                setValue('slug', slugTransform(value.tittle,
                    {shouldValidate : true}
                ))
            }
        })

        return ()=>{
            subscription.unsubscribe();
        }
    },[watch, setValue, slugTransform])


    return(
        <form onSubmit={handleSubmit(submit)} className="mt-2">
            <div className="w-2/3 px-2">
            <Input 
                label="Title: "
                type="text" 
                {...register("tittle",{required:true})}
                className="mb-4"
                placeholder="Title"
            />
            <Input 
                label = "Slug: "
                {...register("slug",{required:true})}
                className="mb-4"
                onInput = {(e)=>{
                    setValue("slug",slugTransform(e.currentTarget.value),{shouldValidate:true})
                }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input 
                    label="Featured Image: " 
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", {required: !post})}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appWriteService.filePreview(post.featuredImage)}
                            alt={post.tittle}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>

        </form>
    )
}