import styled from "styled-components";
import { colors } from "../../styles/variables";

export const FooterBg = styled.div`
  background-color: ${colors.footer};
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  padding: 50px 0;
  align-items: center;
`;


export const FooterInfo = styled.p`
font-size: 10px;
padding: 15px 0;

  a {
    color: ${colors.footerLinks};
  }
`
