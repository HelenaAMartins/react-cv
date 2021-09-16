import { FooterList, FooterIcon } from './styles'

import Linkedin from '../../assets/img/linkedin.svg'
import Codepen from '../../assets/img/codepen.svg'
import Github from '../../assets/img/logotipo-do-github.svg'

const Social = () =>{
  return(
  <FooterList>
            <FooterIcon>
              <a href="https://www.linkedin.com/in/mhelena-martins/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="" /></a>
            </FooterIcon>
            <FooterIcon>
              <a href="https://github.com/HelenaAMartins" target="_blank" rel="noreferrer"><img src={Github} alt="" /></a>
            </FooterIcon>
            <FooterIcon>
              <a href="https://codepen.io/helenaamartins" target="_blank" rel="noreferrer"><img src={Codepen} alt="" /></a>
            </FooterIcon>
          </FooterList>
  )
}

          export default Social
