import express from "express";
import {
  deleteProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../services/prod-service.js";

const products_router = express.Router();

//mongoose router
products_router.get("/productsGet", async (req, res) => {
  const result = await getProducts();
  res.status(200).json(result);
});

products_router.post("/productPost", async (req, res) => {
  const result = await postProduct(req.body);
  if (result !== null) {
    res.status(200).send(result);
  } else {
    res.status(400).send("something error");
  }
});

products_router.delete("/productDel", async (req, res) => {
  const query = req.query;
  if (query && query.name) {
    const result = await deleteProduct(query.name);
    res.status(200).send(result);
  } else {
    res.status(400).send("something wrong");
  }
});

products_router.put("/productPut", async (req, res) => {
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
