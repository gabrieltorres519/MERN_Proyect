// import cloudinary from "cloudinary"
import {v2 as cloudinary} from "cloudinary"


// Configuration 
cloudinary.config({
    cloud_name: "dm3abdxs2",
    api_key: "149178998614597",
    api_secret: "eXXiTA9ivie_OQuYN6i3liHp6KY"
  });
  

export const uploadImage = async filePath =>{
    return await cloudinary.uploader.upload(filePath,{
        folder: 'Post'
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}