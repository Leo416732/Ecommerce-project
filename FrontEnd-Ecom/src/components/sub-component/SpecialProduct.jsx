import { useContext } from "react";
import { ProductContext } from "../../context/ProductsContext";
import Product from "../../pages/Product";
import "../../styles/special.css";

export default function SpecialProduct() {
  const { data } = useContext(ProductContext);

  return (
    <div className="special container">
      <div>
        <p className="nav-title">Special product</p>
      </div>
      <div className="special-product">
        {data &&
          data.map((product, index) => {
            if (product.stock < 5) {
              return <Product product={product} key={index} />;
            }
          })}
      </div>
    </div>
  );
}
