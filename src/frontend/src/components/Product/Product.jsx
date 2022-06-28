import React from "react";
import { Card, CardHeader, CardBody, CardTitle } from "./Product.styles";
import { PRODUCT_TYPE_MAPPER } from "../../config/fieldsMapper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { ROUTES_MAPPER } from "../../config/constants";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

const Product = ({ productData, isLoading }) => {
  const navigate = useNavigate();

  const { id, price, description, image_link, name, product_type } =
    productData;

  const productTypeMapped = PRODUCT_TYPE_MAPPER[product_type];

  const navigateToEdit = () => {
    const path = ROUTES_MAPPER[product_type];
    const route = `${path}/edit/${id}`;
    navigate(route);
  };

  if (isLoading) return <Skeleton height="300px" />;

  return (
    <Card onClick={navigateToEdit}>
      <CardHeader>
        <LazyLoadImage
          src={image_link}
          alt={description}
          height="250px"
          width="250px"
          className="card-image"
        />
      </CardHeader>
      <CardTitle>
        <div>{name}</div>
        <div>€{price}</div>
      </CardTitle>
      <CardBody>
        <div>SN: {id}</div>
        <div>Type: {productTypeMapped}</div>
        <div>Description: {description}</div>
      </CardBody>
    </Card>
  );
};

Product.propTypes = {
  productData: PropTypes.object.isRequired,
};

export default Product;
