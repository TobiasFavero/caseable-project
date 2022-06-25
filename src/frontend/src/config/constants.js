export const BASE_URL = "http://127.0.0.1:5000/api";

export const HTTP_VERBS = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

export const ROUTES = {
  PRODUCTS: "/",
  CASES: {
    EDIT_ID: "cases/edit/:id",
    ADD: "cases/add",
    EDIT: "cases/edit",
  },
};
