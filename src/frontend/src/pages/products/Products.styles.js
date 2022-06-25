import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const ProductsContainer = styled.main`
  display: grid;
  width: 80%;
  height: 100%;
  margin: 1rem auto;
  padding: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  border-radius: 0.2rem;
  background-color: ${COLORS.LIGHTGRAY};
  overflow-y: auto hidden;
`;
