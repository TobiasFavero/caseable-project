import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${COLORS.WHITE};
    font-family: "Roboto", sans-serif;
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
