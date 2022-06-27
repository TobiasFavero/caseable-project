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
  CASES: {
    EDIT_ID: "cases/edit/:id",
    ADD: "cases/add",
    EDIT: "cases/edit",
  },
};

export const ROUTES_MAPPER = {
  case: "/cases",
};

export const PRODUCT_TYPES_OPTIONS = [{ value: "case", label: "Case" }];

export const CASES_COLORS_OPTIONS = [
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
];

export const CASES_PROTECTION_LEVELS_OPTIONS = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export const CASES_DEVICES_OPTIONS = [
  { value: "iphone_11", label: "iPhone 11" },
  { value: "iphone_12", label: "iPhone 12" },
  { value: "iphone_13", label: "iPhone 13" },
];
