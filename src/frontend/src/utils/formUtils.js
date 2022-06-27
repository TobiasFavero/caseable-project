import { FormikInput } from "../components/FormikInput";

export const renderFormFields = (fields) => {
  return Object.keys(fields).map((key) => {
    return (
      <FormikInput
        key={key}
        name={fields[key].value}
        label={fields[key].label}
      />
    );
  });
};
