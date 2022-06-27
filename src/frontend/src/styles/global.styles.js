import styled, { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${COLORS.LIGHTGRAY};
    font-family: "Roboto", sans-serif;
    font-size: 62.5%;
  }
`;

export const Button = styled.button`
  background-color: ${COLORS.TEAL};
  border: 1px solid transparent;
  padding: 10px 20px;
  color: white;
  border-radius: 1rem;

  :hover {
    background-color: ${COLORS.LIGHTTEAL};
  }

  :focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    .button-40 {
      padding: 0.75rem 1.5rem;
    }
  }
`;

export const OutlineButton = styled.button`
  border: 2px solid ${COLORS.TEAL};
  padding: 10px 20px;
  color: ${COLORS.TEAL};
  border-radius: 1rem;
  background-color: ${COLORS.WHITE};

  :hover {
    border: 2px solid ${COLORS.LIGHTTEAL};
  }

  :focus {
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    .button-40 {
      padding: 0.75rem 1.5rem;
    }
  }
`;

export default GlobalStyle;
