const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
    
        // Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
          resource_type: "auto"
        });
    
        // Remove the locally saved temporary file after successful upload
        fs.unlinkSync(localFilePath);
    
        return response;
      } catch (error) {
        // Log the error for debugging purposes
        console.error("Error uploading file to Cloudinary:", error);
    
        // Remove the locally saved temporary file if the upload operation failed
        fs.unlinkSync(localFilePath);
    
        // Return null in case of error
        return null;
      }
};

module.exports = uploadOnCloudinary;
