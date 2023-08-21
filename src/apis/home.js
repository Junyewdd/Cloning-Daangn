import axios from "axios";

export const homePageApi = () => {
  const url = "http://13.124.131.68/api/carrotmarket/product-list";
  const response = axios.get(url);
  return response;
}

