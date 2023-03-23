import mongoose, { Schema } from "mongoose";

const categorySchame = new Schema(
  {
    name: { type: String, required: true, unique: true },
    created_date: { type: String, required: true },
  },
  {
    collection: "category",
  }
);

const Category = mongoose.model("Category", categorySchame, "category");

export default Category;
