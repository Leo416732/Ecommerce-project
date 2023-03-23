import express from "express";
import { postCategory } from "../services/category-service.js";

const category_router = express.Router();

category_router.post("/category", async (req, res) => {
  const result = await postCategory(req.body);
  res.status(200).json(result);
});

export default category_router;
