import express from "express";
import { postCategory } from "../services/category-service";

const category_router = express.Router();

category_router.post("/categoryPost", async (req, res) => {
  const result = await postCategory(req.body);
});
