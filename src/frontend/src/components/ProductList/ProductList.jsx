import { HTTP_VERBS, PRODUCTS_BASE_URL } from "../../config/constants";
import { useFetch } from "../../hooks/useFetch";
import Product from "../Product/Product";
import { Container } from "./ProductList.styles";

const ProductList = () => {
  const { isLoading, apiData, serverError } = useFetch(
    HTTP_VERBS.GET,
    PRODUCTS_BASE_URL
  );

  const renderProduct = (productData) => {
    const { id } = productData;
    return <Product key={id} productData={productData} />;
  };

  return <Container>{apiData?.map(renderProduct)}</Container>;
};

export default ProductList;
