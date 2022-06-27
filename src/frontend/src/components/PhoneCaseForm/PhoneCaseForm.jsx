import { PHONE_CASE_FIELDS } from "../../schemas/phoneCaseSchema";
import { renderFormFields } from "../../utils/formUtils";

const PhoneCaseForm = () => {
  return renderFormFields(PHONE_CASE_FIELDS);
};

export default PhoneCaseForm;
