import express from "express";
import cloudinary from "../config/cloudinary.js";
import upload from "../util/multer-handler.js";
import verifyRole from "../middleware/authorization.js";
import {
  deleteProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../services/prod-service.js";

const products_router = express.Router();

//multer image and add product
products_router.post(
  "/productPost",
  upload.single("file"),

  async (req, res) => {
    const response = await cloudinary.v2.uploader.upload(`${req.file.path}`, {
      folder: `${req.file.filename}`,
    });

    const product = await {
      ...JSON.parse(req.body.newProduct),
      image: response?.secure_url,
    };
    const result = await postProduct(product);
    res.status(200).json({ result, success: "ok" });
  }
);

//mongoose router
products_router.get("/productsGet", async (req, res) => {
  const result = await getProducts();
  res.status(200).json(result);
});

products_router.delete("/productDel", async (req, res) => {
  console.log(req.body);
  const query = req.query;
  if (query && query.name) {
    const result = await deleteProduct(query.name);
    res.status(200).send(result);
  } else {
    res.status(400).send("something wrong");
  }
});

products_router.put("/productPut", verifyRole, async (req, res) => {
  let oldProd = req.query;
  let newProd = req.body;

  if (oldProd && oldProd.name) {
    const result = await putProduct(oldProd.name, newProd);
    res.status(200).json(result);
  } else {
    res.status(400).send("something wrong");
  }
});

export default products_router;
