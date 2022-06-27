import React from "react";
import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";
import { LabelContainer } from "./FormikInput.styles";

const FormikInput = ({ label, name }) => {
  return (
    <div>
      <LabelContainer>
        <label htmlFor={name}>{label}</label>
      </LabelContainer>
      <Field name={name} className="formik-field" />
      <ErrorMessage name={name}>
        {(msg) => <div className="error-message">{msg}</div>}
      </ErrorMessage>
    </div>
  );
};

FormikInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FormikInput;
