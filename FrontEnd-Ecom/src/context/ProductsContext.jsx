import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();

export default function ProductsContext({ children }) {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((products) => setData(products.data));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        setCount,
        data,
        count,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
