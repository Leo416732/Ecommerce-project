import Products from "../model/products.js";
import moment from "moment";
import "../config/mongoose-config.js";
import Category from "../model/category.js";

//get products
export async function getProducts() {
  return await Products.find().populate("category");
}

const date = moment().format("llll");

//post product
export async function postProduct(newProd) {
  newProd.map(async (pro) => {
    const category = await Category.find({
      name: pro.category,
    });

    return await Products.create({
      name: pro.name,
      price: pro.price,
      stock: pro.stock,
      sale: pro.sale,
      category: category[0]._id,
      description: pro.description,
      spec: pro.spec,
      created_date: date,
      update_date: date,
      image: pro.image,
    });
  });
}

//delete product
export async function deleteProduct(deleteProId) {
  return await Products.deleteOne({ _id: deleteProId });
}

//update product
export async function putProduct(_id, newProd) {
  const category = await Category.find({
    name: newProd.category,
  });
  return await Products.updateOne(
    { _id: `${_id}` },
    {
      name: newProd.name,
      price: newProd.price,
      stock: newProd.stock,
      category: category[0].id,
      description: newProd.description,
      spec: newProd.spec,
      update_date: date,
    }
  );
}
