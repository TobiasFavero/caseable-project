import React from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import { LabelContainer } from "./FormikInput.styles";

const FormikInput = ({ label, name, options, disabled = false }) => {
  const SelectInput = () => {
    return (
      <Field
        name={name}
        className="formik-field"
        disabled={disabled}
        as="select"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    );
  };

  return (
    <div>
      <LabelContainer>
        <label htmlFor={name}>{label}</label>
      </LabelContainer>
      {options ? (
        <SelectInput />
      ) : (
        <Field name={name} className="formik-field" disabled={disabled} />
      )}
      <ErrorMessage name={name}>
        {(msg) => <div className="error-message">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

export default FormikInput;
