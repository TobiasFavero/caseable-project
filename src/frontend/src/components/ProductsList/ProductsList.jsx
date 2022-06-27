import { useContext, useEffect } from "react";
import { productsApi } from "../../api/productsApi";
import { ProductsContext } from "../../context/productsContext";
import { useApi } from "../../hooks/useApi";
import Product from "../Product/Product";

const ProductsList = () => {
  const productsContext = useContext(ProductsContext);
  const getProductsApi = useApi(productsApi.getProducts);

  useEffect(() => {
    getProductsApi.request();
  }, []);

  useEffect(() => {
    if (getProductsApi.data) {
      productsContext.setProducts(getProductsApi.data);
    }
  }, [getProductsApi.data]);

  const renderProduct = (productData) => {
    const { id } = productData;
    return (
      <Product
        key={id}
        productData={productData}
        isLoading={getProductsApi.loading}
      />
    );
  };

  return productsContext.products.map(renderProduct);
};

export default ProductsList;
