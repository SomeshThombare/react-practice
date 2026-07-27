import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service{
    Client = new Client();
    Databases;
    bucket;

    constructor(){
        this.Client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.Client);
        this.bucket = new  Storage(this.Client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite service :: createPost:: error", error);
        }
    }

    async updatePost({slug, title, content, featuredImage, status, userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite service :: updatePost:: error",error)
        }
    }

    async deletePost({slug}){
        try{
            await this.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }catch(error){
            console.log("Appwrite service :: deletePost :: error", error)
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteCollectionId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log("Appwrite serivice :: getPost :: error",error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }catch(error){
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    //file upload service

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("Appwrite service :: uploadfile :: error", error)
            return false
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        }catch(error){
            console.log("appwrite serive :: deletefile :: error",error)
            return false
        }
    }
    
    getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
    }
}
const serivces = new Service()
export default serivces