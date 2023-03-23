import express from "express";
import cors from "cors";
import products_router from "./routes/products.js";
import users_router from "./routes/users.js";
import orders_router from "./routes/orders.js";
import category_router from "./routes/category.js";

const app = express();
const port = 2020;
app.use(cors());
app.use(express.json());
app.use(products_router);
app.use(users_router);
app.use(orders_router);
app.use(category_router);

app.listen(port, () => {
  console.log(`Server is starting ${port} port`);
});
