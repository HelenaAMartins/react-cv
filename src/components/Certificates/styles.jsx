import styled from "styled-components";
import { Section } from "../../styles/shared";
import { colors } from "../../styles/variables";

export const CertificatesSection = styled(Section)`
  background-color: ${colors.certificates};
  min-height: 70vh;
  padding: 100px 0;
`;
export const CertificatesTitle = styled.h2`
  text-align: center;
  font-size: 45px;
  margin-bottom: 50px;
  font-weight: 300;
  font-family: "Lato";
`;

export const CertificatesWrap = styled.div`
  display: grid;
  grid-gap: 25px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
