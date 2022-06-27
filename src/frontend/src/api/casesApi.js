import axios from "axios";
import { CASES_BASE_URL } from "../config/constants";

export const phoneCasesApi = {
  deleteCase: (product) => axios.delete(CASES_BASE_URL, { data: product }),
  updateCase: (product) => axios.put(CASES_BASE_URL, product),
  addCase: (product) => axios.post(CASES_BASE_URL, product),
};
