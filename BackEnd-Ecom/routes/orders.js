import express from "express";
import fs from "fs";
import { uuid } from "uuidv4";

const orders_router = express.Router();

//function date
let date = new Date();
function currentDate() {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("/");
}

//orders
orders_router.get("/orders", (req, res) => {
  fs.readFile("./data/orders.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let orders = JSON.parse(data);
      res.status(200).json(orders);
    }
  });
});

orders_router.post("/orders", (req, res) => {
  fs.readFile("./data/orders.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let orders = JSON.parse(data);
      orders.push({
        ...req.body,
        orderId: uuid().slice(0, 6),
        date: currentDate(),
      });
      fs.writeFile("./data/orders.json", JSON.stringify(orders), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "success" });
        }
      });
    }
  });
});

export default orders_router;
