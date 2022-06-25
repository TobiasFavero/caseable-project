import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Form = styled.form`
  width: 80%;
  height: 80%;
  margin: 10% auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  border-radius: 0.2rem;
  background-color: ${COLORS.LIGHTGRAY};
`;

export const Input = styled.input``;

export const Label = styled.label``;
