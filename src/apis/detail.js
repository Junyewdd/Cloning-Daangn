import axios from "axios";

export const detailPageApi = () => {
  const url = "http://13.124.131.68/api/carrotmarket/product-details";
  const response = axios.get(url);
  return response;
}