import { useContext, useEffect, useState } from "react";
import { productsApi } from "../../api/productsApi";
import { ProductsContext } from "../../context/productsContext";
import { request } from "../../utils/apiUtils";
import Product from "../Product/Product";

const ProductsList = () => {
  const productsContext = useContext(ProductsContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const data = await request(productsApi.getProducts);
      setLoading(false);
      productsContext.setProducts(data || []);
    };

    fetchProducts();
  }, []);

  const renderProduct = (productData) => {
    const { id } = productData;
    return <Product key={id} productData={productData} isLoading={loading} />;
  };

  return !productsContext.products.length
    ? "Add a product"
    : productsContext.products.map(renderProduct);
};

export default ProductsList;
