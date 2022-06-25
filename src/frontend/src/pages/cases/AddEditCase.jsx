import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { caseSchema } from "../../validation-schemas/caseSchema";
import { Form, Input } from "./AddEditCases.styles";

const AddEditCase = (props) => {
  const { id } = useParams();
  const isAddMode = !id;

  const { register, handleSubmit, reset, setValue, errors, formState } =
    useForm({
      resolver: yupResolver(caseSchema),
    });

  return (
    <Form>
      <h1>{isAddMode ? "Add Case" : "Edit Case"}</h1>
    </Form>
  );
};

export default AddEditCase;
