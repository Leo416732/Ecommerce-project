import Category from "../model/category.js";
import moment from "moment";
import "../config/mongoose-config.js";

const date = moment().format("llll");

export async function postCategory(newCate) {
  return await Category.create({
    name: newCate.name.toLowerCase(),
    created_date: date,
  });
}

export async function getCategories() {
  return await Category.find();
}
