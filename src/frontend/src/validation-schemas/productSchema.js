import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  id: Yup.number()
    .required("Id is required")
    .min(1, "Id should be greater or equal than 1"),
  price: Yup.number()
    .required("Price is required")
    .min("Price must be at least 0.1"),
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  product_type: Yup.string().required("Product Type is required"),
  image_link: Yup.string().url("Image Linke must be a valid URL"),
});
