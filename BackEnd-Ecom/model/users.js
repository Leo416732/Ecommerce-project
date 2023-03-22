import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    login_date: { type: String, required: true },
    address: { type: String, required: false },
    phone: { type: Number, required: false },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    collection: "users",
  }
);

const Users = mongoose.model("Users", userSchema, "users");

export default Users;
