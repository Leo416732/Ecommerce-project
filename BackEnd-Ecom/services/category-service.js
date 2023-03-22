import Category from "../model/category.js";
import moment from "moment";
import "../config/mongoose-config.js";

export async function postCategory(newCate) {
  return await Category.create({
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
