import styled from "styled-components";
import { colors } from "../../styles/variables";

export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin-top: 20px;
`;

export const FooterIcon = styled.li`
  overflow: hidden;
  border-radius: 50%;

  width: 35px;
  height: 35px;
  background: ${colors.icons};
  display: flex;
  justify-content: center;
  align-items: center;

   img {
    width: 20px;
    margin-top: 5px;
  }
`;
