import express from "express";
import multer from "multer";
import { nanoid } from "nanoid";
import cloudinary from "../config/cloudinary.js";
import {
  deleteProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../services/prod-service.js";

const products_router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const ext = extractExtension(file.originalname);
    console.log("ext: ", ext);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
});
const extractExtension = (name) => {
  const splitted = name.split(".");
  return splitted[splitted.length - 1];
};

const upload = multer({ storage: storage });

//multer image
products_router.post(
  "/productPostImage",
  upload.single("file"),
  async (req, res) => {
    console.log("req.file.path:", req.file.path);
    const responsive = cloudinary.v2.uploader.upload(`${req.file.path}`, {
      folder: `${req.file.filename}`,
    });
    responsive
      .then((data) => {
        console.log(data);
        console.log(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

//mongoose router
products_router.get("/productsGet", async (req, res) => {
  const result = await getProducts();
  res.status(200).json(result);
});

products_router.post("/productPost", async (req, res) => {
  // const result = await postProduct(req.body);
  // if (result !== null) {
  //   res.status(200).send(result);
  // } else {
  //   res.status(400).send("something error");
  // }
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
