import Products from "./pages/products/Products";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./config/constants";
import AddEditCase from "./pages/cases/AddEditCase";

function App() {
  return (
    <Routes>
      <Route exact path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.CASES.ADD} element={<AddEditCase />} />
      <Route path={ROUTES.CASES.EDIT_ID} element={<AddEditCase />} />
      <Route path="*" element={<Navigate to={ROUTES.PRODUCTS} replace />} />
    </Routes>
  );
}

export default App;
