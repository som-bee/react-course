import conf from '../conf/conf'
import { Client, Databases, Storage, Query, ID } from "appwrite";



export class Service{
    client = new Client();
    databases;
    bucket;

    //init db and bucket
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    // blogs crud

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug);
        } catch (error) {
            console.log("Appwrite service :: getPost() :: ", error);
            return false;
        }
    }

    async getPost(queries=[Query.equal("status", ["active"])]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.log("Appwrite servvice :: getPost() :: ", error);
            return false;
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug,
                {title, content, featuredImage, status, userId}
            )
        } catch (error) {
            console.log("Appwrite servvice :: createPost() :: ", error);
            return false;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug,
                {title, content, featuredImage, status}
            )
        } catch (error) {
            console.log("Appwrite servvice :: updatePost() :: ", error);
            return false;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDbId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite servvice :: deletePost() :: ", error);
            return false;
        }
    }


    //storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file

            )
        } catch (error) {
            console.log("Appwrite servvice :: uploadFie() :: ", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite servvice :: deleteFie() :: ", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ).href;
    }
}




const service = new Service();
export default service;