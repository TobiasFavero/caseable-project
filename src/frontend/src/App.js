import Products from "./pages/products/Products";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./config/constants";
import AddEditPhoneCase from "./pages/phone-cases/AddEditPhoneCase";
import { ProductsContextProvider } from "./context/productsContext";
import "react-loading-skeleton/dist/skeleton.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route exact path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.PHONE_CASES.ADD} element={<AddEditPhoneCase />} />
        <Route
          path={ROUTES.PHONE_CASES.EDIT_ID}
          element={<AddEditPhoneCase />}
        />
        <Route path="*" element={<Navigate to={ROUTES.PRODUCTS} replace />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toast-container"
      />
    </ProductsContextProvider>
  );
}

export default App;
