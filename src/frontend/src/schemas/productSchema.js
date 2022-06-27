import * as Yup from "yup";

export const PRODUCT_FIELDS = {
  id: { value: "id", label: "Serial Number" },
  price: { value: "price", label: "Price" },
  name: { value: "name", label: "Name" },
  description: { value: "description", label: "Description" },
  product_type: { value: "product_type", label: "Product Type" },
  image_link: { value: "image_link", label: "Image Link" },
};

export const productSchema = Yup.object().shape({
  [PRODUCT_FIELDS.id.value]: Yup.number()
    .required("Id is required")
    .min(1, "Id should be greater or equal than 1"),
  [PRODUCT_FIELDS.price.value]: Yup.number()
    .required("Price is required")
    .min(0.1, "Price must be at least 0.1"),
  [PRODUCT_FIELDS.name.value]: Yup.string().required("Name is required"),
  [PRODUCT_FIELDS.description.value]: Yup.string().required(
    "Description is required"
  ),
  [PRODUCT_FIELDS.product_type.value]: Yup.string().required(
    "Product Type is required"
  ),
  [PRODUCT_FIELDS.image_link.value]: Yup.string().url(
    "Image Linke must be a valid URL"
  ),
});
