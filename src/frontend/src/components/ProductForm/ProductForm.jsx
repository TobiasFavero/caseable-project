import { PRODUCT_FIELDS } from "../../schemas/productSchema";
import { renderFormFields } from "../../utils/formUtils";

const ProductForm = ({ editMode = false }) => {
  return renderFormFields(PRODUCT_FIELDS, editMode);
};

export default ProductForm;
