import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://Leo:Zxcvb%400801@leo.s9beivo.mongodb.net/ecommerce")
  .then(() => console.log("connect"));

export default mongoose.connection;
