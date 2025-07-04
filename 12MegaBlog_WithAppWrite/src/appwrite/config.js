import conf from '../conf/conf'
import {Client, Databases,Storage, ID, Query} from "appwrite"

export class Service {
    client = new Client();
    database;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({tittle,slug,content,featuredImage,status,userId}){
        try{
            return await this.database.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle
                    ,content
                    ,featuredImage
                    ,status
                    ,userId
                }
            )
        }
        catch(error){
            console.log("Database Service :: createPost :: ",error);
        }
    }

    async updatePost(slug,{tittle,content,featuredImage,status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    tittle
                    ,content
                    ,featuredImage
                    ,status
                }
            )
        } catch (error) {
            console.log("Database Service :: updatePost :: ",error);
        }
    }

    async deletePost(slug){
        try {
            await this.database.deleteDocument(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Database Service :: deletePost :: ",error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) { 
            console.log("Database Service :: getPost :: ",error);
        }
    }

    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Database Service :: getPosts :: ",error);
        }
    }

    //for files

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            return true;
        } catch (error) {
            console.log("Database Service :: uploadFile :: ",error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Database Service :: deleteFile :: ",error);
            return false;
        }
    }

    filePreview(fileId){
        try {
            this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.log("Database Service :: FilePreview :: ",error);
        }
    }
}

const service = new Service();
 
export default service;