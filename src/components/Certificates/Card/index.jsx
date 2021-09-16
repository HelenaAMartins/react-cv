import { Certificate } from "./styles";
import Alura from "../../../assets/img/certificates_alura_frontend.png";
import Python from "../../../assets/img/certificates_alura_python.png";
import Iv2 from "../../../assets/img/certificates_iv2.png";
import ReactImg from "../../../assets/img/react-symbol.png";
import LetrasUfc from "../../../assets/img/certificates_ufc.png";
import Cae from "../../../assets/img/certificates_cambridge.png";

const Card = ({ data }) => {
  const { title, where, status, icon } = data;

  const getImg = () => {
    switch (icon) {
      case "front-end":
        return Alura;
      case "python":
        return Python;
      case "iv2":
        return Iv2;
      case "reactUdemy":
        return ReactImg;
      case "letrasUfc":
        return LetrasUfc;
      case "cae":
        return Cae;

      default:
        return;
    }
  };

  return (
    <Certificate>
      <figure>
        <img src={getImg()} alt="" />
      </figure>
      <div class="certificates__info">
        <h3>{title}</h3>
        <p>
          {where} | <span class="progress">{status}</span>
        </p>
      </div>
    </Certificate>
  );
};

export default Card;
