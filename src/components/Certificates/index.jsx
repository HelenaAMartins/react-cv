import { Container } from "../../styles/shared";

import {
  CertificatesSection,
  CertificatesTitle,
  CertificatesWrap,
} from "./styles";
import Mock from "./mock.json";
import Card from "./Card";

const Certificates = () => (
  <CertificatesSection>
    <Container>
      <CertificatesTitle>Certificados & Cursos</CertificatesTitle>
      <CertificatesWrap>
        {Mock.map((certificate) => {
          return <Card data={certificate} />;
        })}
      </CertificatesWrap>
    </Container>
  </CertificatesSection>
);

export default Certificates;
