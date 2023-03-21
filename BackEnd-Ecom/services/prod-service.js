import Products from "../model/products.js";
import moment from "moment";
import "../config/mongoose-config.js";

//get products
export async function getProducts() {
  const products = await Products.find();
  if (products) {
    return products;
  }
}

const date = moment().format("llll");

//post product
export async function postProduct(newProd) {
  const prod = await Products.create({
    name: newProd.name,
    price: newProd.price,
    stock: newProd.stock,
    sale: newProd.sale,
    category: newProd.category,
    description: newProd.description,
    spec: newProd.spec,
    created_date: date,
    update_date: date,
    image: newProd.image,
  });
}

//delete product
export async function deleteProduct(deleteProName) {
  return await Products.deleteMany({ name: deleteProName });
}

//update product
export async function putProduct(_id, newProd) {
  return await Products.updateOne(
    { _id },
    {
      name: newProd.name,
      price: newProd.price,
      stock: newProd.stock,
      category: newProd.category,
      description: newProd.description,
      spec: newProd.spec,
      update_date: date,
    }
  );
}
