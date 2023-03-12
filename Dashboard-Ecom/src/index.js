import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Handlers from "./context/ProductProvider";
import OrderProvider from "./context/OrderProvider";
import UserProvider, { UserContext } from "./context/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Handlers>
      <UserProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </UserProvider>
    </Handlers>
  </BrowserRouter>
);
