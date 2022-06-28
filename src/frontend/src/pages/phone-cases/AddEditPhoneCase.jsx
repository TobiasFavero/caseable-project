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
import { request, useApi } from "../../utils/apiUtils";
import { phoneCasesApi } from "../../api/casesApi";
import ProductForm from "../../components/ProductForm/ProductForm";
import PhoneCaseForm from "../../components/PhoneCaseForm/PhoneCaseForm";
import { toast } from "react-toastify";
import CustomButton from "../../components/CustomButton/CustomButton";

const AddEditPhoneCase = () => {
  const navigate = useNavigate();
  const { products } = useContext(ProductsContext);
  const { id } = useParams();
  const [currentPhoneCase, setCurrentPhoneCase] = useState({});
  const [initialValues, setInitialValues] = useState(
    PHONE_CASE_FORM_INITIAL_VALUES
  );
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

  const navigateToProducts = () => {
    setTimeout(() => navigate(ROUTES.PRODUCTS), 500);
  };

  const handleSubmit = async (values) => {
    let data = null;
    if (isAddMode) {
      data = await request(phoneCasesApi.addCase, values);
    } else {
      data = await request(phoneCasesApi.updateCase, values);
    }

    if (data) {
      const message = isAddMode ? "Phone case created" : "Phone case updated";
      toast.success(message);
      navigateToProducts();
    }
  };

  const handleDelete = async () => {
    if (!isAddMode) {
      const data = await request(phoneCasesApi.deleteCase, currentPhoneCase);

      if (data) {
        toast.success("Phone case deleted");
        navigateToProducts();
      }
    }
  };

  return (
    <>
      <FormContainer>
        <FormHeader>
          <h1>{isAddMode ? "Add Phone Case" : "Edit Phone Case"}</h1>
          <Link to={ROUTES.PRODUCTS}>Go back</Link>
        </FormHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={phoneCaseSchema}
          enableReinitialize={true}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form>
            <ProductForm editMode={!isAddMode} />
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
    </>
  );
};

export default AddEditPhoneCase;
