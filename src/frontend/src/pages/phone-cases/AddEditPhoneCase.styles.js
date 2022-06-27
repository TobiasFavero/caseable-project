import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const FormContainer = styled.div`
  height: 80%;
  margin: 10% auto;
  border-radius: 0.2rem;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.WHITE};
  padding: 3rem;
  color: ${COLORS.GRAY};

  & input.formik-field {
    padding: 4px 12px;
  }

  & .error-message {
    color: ${COLORS.RED};
    font-size: 11px;
    margin-bottom: 1rem;
    text-align: right;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1.5rem;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  margin-bottom: 3rem;

  & a {
    font-size: 14px;
  }
`;
