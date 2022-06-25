import React from "react";
import { Button } from "../../styles/global.styles";
import { ProductsCreatorContainer } from "./ProductsCreator.styles";
import { ROUTES } from "../../config/constants";
import { useNavigate } from "react-router-dom";

const ProductsCreator = () => {
  const navigate = useNavigate();

  const navigateToCreate = () => {
    const route = `${ROUTES.CASES.ADD}`;
    navigate(route);
  };

  return (
    <ProductsCreatorContainer>
      <Button onClick={navigateToCreate}>New Product</Button>
    </ProductsCreatorContainer>
  );
};

export default ProductsCreator;
