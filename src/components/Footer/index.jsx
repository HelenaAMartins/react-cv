import { Section } from "../../styles/shared";
import { FooterBg, FooterInfo } from "./styles";
import Social from "../Social";

const Footer = () => {
  return (
    <Section>
      <FooterBg>
        <Social />
        <FooterInfo>
          Photo by{" "}
          <a
            href="https://unsplash.com/@florianolv?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Florian
          </a>
          {" "}on{" "}
          <a
            href="https://unsplash.com/s/photos/developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="_blank"
            rel="noreferrer"
          >
            Unsplash
          </a>
        </FooterInfo>
      </FooterBg>
    </Section>
  );
};

export default Footer;
