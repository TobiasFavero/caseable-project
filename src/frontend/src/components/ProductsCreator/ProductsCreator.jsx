import React from "react";
import { Button } from "../../styles/global.styles";
import { ProductsCreatorContainer } from "./ProductsCreator.styles";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { PRODUCT_TYPES_OPTIONS, ROUTES_MAPPER } from "../../config/constants";
import { useSelect } from "../../hooks/useSelect";

const ProductsCreator = () => {
  const [selectedValue, handleChange] = useSelect("Please select one");
  const navigate = useNavigate();

  const hasManyProducts = PRODUCT_TYPES_OPTIONS.length > 1;

  const navigateToCreate = () => {
    const route =
      ROUTES_MAPPER[selectedValue] ||
      ROUTES_MAPPER[PRODUCT_TYPES_OPTIONS[0].value];

    navigate(`${route}/add`);
  };

  const RenderOptions = () => (
    <Select options={PRODUCT_TYPES_OPTIONS} onChange={handleChange} />
  );

  return (
    <ProductsCreatorContainer>
      {hasManyProducts && <RenderOptions />}
      <Button onClick={navigateToCreate}>New Product</Button>
    </ProductsCreatorContainer>
  );
};

export default ProductsCreator;
