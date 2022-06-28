export const SERVER_BASE_URL = "http://127.0.0.1:5000/api";

export const CASES_BASE_URL = `${SERVER_BASE_URL}/cases`;

export const PRODUCTS_BASE_URL = `${SERVER_BASE_URL}/products`;

export const HTTP_VERBS = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PUT: "PUT",
};

export const ROUTES = {
  PRODUCTS: "/",
  PHONE_CASES: {
    EDIT_ID: "phone-cases/edit/:id",
    ADD: "phone-cases/add",
    EDIT: "phone-cases/edit",
  },
};

export const ROUTES_MAPPER = {
  phone_case: "/phone-cases",
};
