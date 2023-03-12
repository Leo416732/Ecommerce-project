import express from "express";
import fs from "fs";

const products_router = express.Router();

products_router.get("/products", (req, res) => {
  fs.readFile("./data/products.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let products = JSON.parse(data);
      res.status(200).json(products);
    }
  });
});

products_router.post("/products", (req, res) => {
  fs.readFile("./data/products.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      const products = JSON.parse(data);
      products.push({ ...req.body, id: uuid().slice(0, 8) });
      fs.writeFile("./data/products.json", JSON.stringify(products), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "success" });
        }
      });
    }
  });
});

products_router.delete("/products/:id", (req, res) => {
  fs.readFile("./data/products.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let products = JSON.parse(data);
      const filter = products.filter((prd) => prd.id !== req.params.id);
      products = filter;
      fs.writeFile("./data/products.json", JSON.stringify(products), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "success" });
        }
      });
    }
  });
});
products_router.put("/products/:id", (req, res) => {
  fs.readFile("./data/products.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let products = JSON.parse(data);
      const findData = products.find((product) => product.id === req.params.id);
      products[products.indexOf(findData)] = req.body;
      fs.writeFile("./data/products.json", JSON.stringify(products), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "success" });
        }
      });
    }
  });
});
products_router.put("/product/:id", (req, res) => {
  fs.readFile("./data/products.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let products = JSON.parse(data);
      const findData = products.find((product) => product.id === req.params.id);
      products[products.indexOf(findData)].stock =
        Number(products[products.indexOf(findData)].stock) - req.body.stock;
      fs.writeFile("./data/products.json", JSON.stringify(products), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "success" });
        }
      });
    }
  });
});

export default products_router;
