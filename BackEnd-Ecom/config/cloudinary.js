import cloudinary from "cloudinary";
import * as dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_SECRET_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export default cloudinary;
