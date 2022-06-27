import axios from "axios";
import { PRODUCTS_BASE_URL } from "../config/constants";

export const productsApi = {
  getProducts: () => axios.get(PRODUCTS_BASE_URL),
  getProduct: (id) => axios.get(`${PRODUCTS_BASE_URL}/${id}`),
};
