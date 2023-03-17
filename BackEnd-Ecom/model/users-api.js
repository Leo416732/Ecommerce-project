import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: Number, required: true },
    role: String,
    login_date: String,
  },
  {
    collection: "users",
  }
);

const Users = mongoose.model("Users", productSchema, "users");

export default Users;
