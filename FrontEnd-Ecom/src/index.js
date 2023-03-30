import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AxiosConfig from "./axios_config/Axios";
import BasketsContext from "./context/BasketsContext";
import ProductsContext from "./context/ProductsContext";
import ThemeProvider from "./context/Theme";
import UsersContext from "./context/UsersContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AxiosConfig>
      <ThemeProvider>
        <ProductsContext>
          <UsersContext>
            <BasketsContext>
              <App />
            </BasketsContext>
          </UsersContext>
        </ProductsContext>
      </ThemeProvider>
    </AxiosConfig>
  </BrowserRouter>
);
