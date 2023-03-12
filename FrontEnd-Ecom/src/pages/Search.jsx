import { useContext } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { ProductContext } from "../context/ProductsContext";
import "../style/search.css";

export default function Search() {
  const { data } = useContext(ProductContext);
  const test = useParams();

  let datafilter =
    data &&
    data.filter((searchProduct) =>
      searchProduct.name.toLowerCase().includes(test.product.toLowerCase())
    );
  return (
    <div className="container search">
      {datafilter &&
        datafilter.map((filteredProduct, index) => (
          <Product product={filteredProduct} key={index} />
        ))}
    </div>
  );
}
