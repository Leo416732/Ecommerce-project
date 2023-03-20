import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    price: {
      type: Number,
      required: true,
      unique: true,
    },
    stock: { type: Number, required: true },
    sale: Number,
    category: { type: String, required: true },
    spec: { type: [], required: false },
    description: String,
    created_date: { type: String, required: true },
    update_date: { type: String, required: true },
  },
  {
    collection: "products",
  }
);

const Products = mongoose.model("Products", productSchema, "products");

export default Products;
