import { ProductsList } from "../../components/ProductsList";
import { ProductsContainer } from "./Products.styles";
import { ProductsCreator } from "../../components/ProductsCreator";

const Products = () => {
  return (
    <>
      <ProductsCreator />
      <ProductsContainer>
        <ProductsList />
      </ProductsContainer>
    </>
  );
};

export default Products;
