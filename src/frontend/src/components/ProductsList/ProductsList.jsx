import { HTTP_VERBS, BASE_URL } from "../../config/constants";
import { useFetch } from "../../hooks/useFetch";
import Product from "../Product/Product";

const ProductsList = () => {
  const { isLoading, apiData, serverError } = useFetch(
    HTTP_VERBS.GET,
    BASE_URL + "/cases"
  );

  const renderProduct = (productData) => {
    const { id } = productData;
    return <Product key={id} productData={productData} />;
  };

  return apiData?.map(renderProduct);
};

export default ProductsList;
