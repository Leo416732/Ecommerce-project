import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductProvider";
import AdminHeader from "../components/Header";
import SideMenu from "../components/SideMenu";
import Product from "./Product";
import ProductCanvas from "../components/sub/ProductCanvas";

export default function Search() {
  const { data } = useContext(ProductsContext);
  const paramsName = useParams();

  let filterProd =
    data &&
    data.filter((prod) =>
      prod.name.toLowerCase().includes(paramsName.name.toLowerCase())
    );
  return (
    <>
      <AdminHeader />
      <div className="d-flex">
        <SideMenu />
        <ProductCanvas />
        <div className="dashboard">
          <div className="dashboard-header">
            <img
              className="dashboard-button-image"
              src="../search.svg"
              alt=""
            />
            <p>Search</p>
          </div>
          <div className="product-container">
            <div className="product-title mt-4">
              <p className="product-image">Зураг</p>
              <p className="product-name">Барааны нэр</p>
              <p className="product-price">Үнэ</p>
              <p className="product-stock">Үлдэгдэл</p>
              <p className="product-sale">Хямдрал</p>
              <p className="product-categ">Категори</p>
            </div>
            <div>
              {filterProd &&
                filterProd.map((product, index) => (
                  <Product product={product} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
