import React from "react";
import { Card, CardHeader, CardBody, CardTitle } from "./Product.styles";
import { PRODUCT_TYPE_MAPPER } from "../../config/fieldsMapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/constants";

const Product = ({ productData }) => {
  const navigate = useNavigate();

  const { id, price, description, image_link, name, product_type } =
    productData;

  const productTypeMapped = PRODUCT_TYPE_MAPPER[product_type];

  const navigateToEdit = () => {
    const route = `${ROUTES.CASES.EDIT}/${id}`;
    navigate(route);
  };

  return (
    <Card onClick={navigateToEdit}>
      <CardTitle>
        <div>Name: {name}</div>
      </CardTitle>
      <CardHeader>
        <LazyLoadImage
          src={image_link}
          alt={description}
          height="auto"
          width="75%"
        />
      </CardHeader>
      <CardBody>
        <div>Id: {id}</div>
        <div>Product Type: {productTypeMapped}</div>
        <div>Description: {description}</div>
        <div>Price: €{price}</div>
      </CardBody>
    </Card>
  );
};

export default Product;
