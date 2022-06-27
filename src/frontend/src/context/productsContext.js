import { createContext, useState, useMemo } from "react";

export const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const productsContextValue = useMemo(
    () => ({
      products,
      setProducts,
    }),
    [products]
  );

  return (
    <ProductsContext.Provider value={productsContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
