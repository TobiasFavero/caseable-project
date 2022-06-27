import styled from "styled-components";
import { COLORS } from "../../styles/colors";

export const Card = styled.article`
  background-color: ${COLORS.WHITE};
  border-radius: 0.2rem;
  padding: 1rem 2rem;
  :hover {
    box-shadow: ${COLORS.SHADOW} 0px 5px 15px;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  text-align: left;
  font-size: 20px;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.2rem;
`;

export const CardBody = styled.div`
  display: block;
  text-align: left;
  font-size: 14px;
  padding-bottom: 0.5rem;
  color: ${COLORS.GRAY};
`;
