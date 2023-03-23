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
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    spec: { type: [], required: false },
    description: { type: String, required: false },
    created_date: { type: String, required: true },
    update_date: { type: String, required: true },
    image: { type: String, required: false },
  },
  {
    collection: "products",
  }
);

const Products = mongoose.model("Products", productSchema, "products");

export default Products;
