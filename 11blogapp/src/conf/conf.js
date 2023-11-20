const conf = {
    appwriteUrl: String(process.env.REACT_APP_APPWRITE_URL),
    appwriteProjId: String(process.env.REACT_APP_APPWRITE_PROJ_ID),
    appwriteDbId: String(process.env.REACT_APP_APPWRITE_DB_ID),
    appwriteCollectionId: String(process.env.REACT_APP_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(process.env.REACT_APP_APPWRITE_BUCKET_ID)

}

export default conf;
