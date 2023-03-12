import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export default function OrderProvider({ children }) {
  const [ordersList, setOrdersList] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:2020/orders")
      .then((orders) => setOrdersList(orders.data));
  }, []);
  return (
    <OrderContext.Provider value={{ ordersList }}>
      {children}
    </OrderContext.Provider>
  );
}
