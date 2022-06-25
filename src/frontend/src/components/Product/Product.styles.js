import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Card = styled.article`
  background-color: ${COLORS.WHITE};
  border-radius: 0.2rem;
  :hover {
    box-shadow: ${COLORS.SHADOW} 0px 5px 15px;
  }
`;

export const CardTitle = styled.div`
  display: block;
  text-align: center;
  font-size: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
`;

export const CardBody = styled.div`
  display: block;
  text-align: center;
  font-size: 16px;
  padding-bottom: 0.5rem;
`;
