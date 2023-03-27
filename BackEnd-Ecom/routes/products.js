import express from "express";
import cloudinary from "../config/cloudinary.js";
import upload from "../util/multer-handler.js";
import verifyRole from "../middleware/authorization.js";
import {
  deleteProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../services/product-service.js";

const products_router = express.Router();

// multer image and add product
// products_router.post(
//   "/productPost",
//   upload.single("file"),
//   async (req, res) => {
//     const response = await cloudinary.v2.uploader.upload(`${req.file.path}`, {
//       folder: `${req.file.filename}`,
//     });

//     const product = await {
//       ...JSON.parse(req.body.newProduct),
//       image: response?.secure_url,
//     };
//     const result = await postProduct(product);
//     res.status(200).json({ result, success: "ok" });
//   }
// );

// products_router.post("/productsPost", async (req, res) => {
//   const result = await postProduct(req.body);
//   res.status(200).json({ result, success: "ok" });
// });

//mongoose router
products_router.get("/productsGet", async (req, res) => {
  const result = await getProducts();
  res.status(200).json(result);
});

products_router.post("/productDel", verifyRole, async (req, res) => {
  const query = req.query;
  console.log("role: ", req.body.role);
  if (query && query.id) {
    const result = await deleteProduct(query.id);
    res.status(200).send(result);
  } else {
    res.status(400).send("something wrong");
  }
});

products_router.put("/productPut", async (req, res) => {
  let oldProd = req.query;
  let newProd = req.body;

  if (oldProd && oldProd._id) {
    const result = await putProduct(oldProd._id, newProd);
    res.status(200).json(result);
  } else {
    res.status(400).send("something wrong");
  }
});

export default products_router;
