import { FormikInput } from "../components/FormikInput";

export const renderFormFields = (fields, editMode = false) => {
  return Object.keys(fields).map((key) => {
    return (
      <FormikInput
        key={key}
        name={fields[key].value}
        label={fields[key].label}
        disabled={editMode && fields[key].disabled}
        options={fields[key].options}
      />
    );
  });
};
