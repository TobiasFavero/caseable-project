import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  phoneCaseSchema,
  PHONE_CASE_FORM_INITIAL_VALUES,
} from "../../schemas/phoneCaseSchema";
import {
  ButtonsContainer,
  FormContainer,
  FormHeader,
} from "./AddEditPhoneCase.styles";
import { Formik, Form } from "formik";
import { ProductsContext } from "../../context/productsContext";
import { ROUTES } from "../../config/constants";
import { useApi } from "../../hooks/useApi";
import { phoneCasesApi } from "../../api/casesApi";
import ProductForm from "../../components/ProductForm/ProductForm";
import PhoneCaseForm from "../../components/PhoneCaseForm/PhoneCaseForm";
import { ToastContainer, toast } from "react-toastify";
import CustomButton from "../../components/CustomButton/CustomButton";

const AddEditPhoneCase = () => {
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const [currentPhoneCase, setCurrentPhoneCase] = useState({});
  const [initialValues, setInitialValues] = useState(
    PHONE_CASE_FORM_INITIAL_VALUES
  );
  const createPhoneCaseApi = useApi(phoneCasesApi.addCase);
  const deletePhoneCaseApi = useApi(phoneCasesApi.deleteCase);
  const updatePhoneCaseApi = useApi(phoneCasesApi.updateCase);

  const isAddMode = !id;

  useEffect(() => {
    if (!isAddMode) {
      const currentCase = products.find((product) => product.id == id);
      if (currentCase) {
        setInitialValues(currentCase);
        setCurrentPhoneCase(currentCase);
      }
    }
  }, []);

  const handleSubmit = async (values) => {
    if (isAddMode) {
      await createPhoneCaseApi.request(values);
    } else {
      await updatePhoneCaseApi.request(values);
    }
  };

  const handleDelete = async () => {
    if (!isAddMode) {
      await deletePhoneCaseApi.request(currentPhoneCase);

      if (!deletePhoneCaseApi.error) {
        toast.success("Phone case deleted");
      } else {
        toast.error(deletePhoneCaseApi.error);
      }
    }
  };

  return (
    <>
      <FormContainer>
        <FormHeader>
          <h1>{isAddMode ? "Add Case" : "Edit Case"}</h1>
          <Link to={ROUTES.PRODUCTS}>Go back</Link>
        </FormHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={phoneCaseSchema}
          enableReinitialize={true}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form>
            <ProductForm />
            <PhoneCaseForm />
            <ButtonsContainer>
              {!isAddMode && (
                <CustomButton
                  variant="outline"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </CustomButton>
              )}
              <CustomButton type="submit">Save</CustomButton>
            </ButtonsContainer>
          </Form>
        </Formik>
      </FormContainer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default AddEditPhoneCase;
