import { PRODUCT_FIELDS } from "../../schemas/productSchema";
import { renderFormFields } from "../../utils/formUtils";

const ProductForm = () => {
  return renderFormFields(PRODUCT_FIELDS);
};

export default ProductForm;
