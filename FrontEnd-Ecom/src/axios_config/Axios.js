import axios from "axios";

import React from "react";

export default function AxiosConfig({ children }) {
  a;
  axios.interceptors.request.use(
    function (request) {
      console.log("intercepting request: ", request);
      const url = request.url;
      switch (url) {
        case "http://locahost:3000/productDel":
        case "http://locahost:3000/productPost":
        case "http://locahost:3000/productPut": {
          console.log("admin erh baihgv bn");
          break;
        }
      }
      return request;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      if (response.status === 200) {
        console.log("intercepting response:", response);
        return response;
      }
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return <>{children}</>;
}
