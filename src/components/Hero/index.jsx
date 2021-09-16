import { Languages, LanguagesBtn, HeroSection, AboutWrap, AboutPhoto, AboutText, Arrow } from './styles'

import HeroImg from '../../assets/img/me.PNG'
import Social from '../Social'
import { useState } from 'react'

const Hero = () => {
  const languages = {
    ptBr: "Olá! Meu nome é Helena Martins, sou uma desenvolvedora frontend junior brasileira. No momento, faço cursos na Alura, na Faculdade iv2, além de outros, para desenvolver minhas habilidades. Minhas habilidades principais são HTML5, CSS3 e Javascript. Também sou fluente em inglês.",
    eng:  "Hello! My name's Helena Martins, and I'm a Brazilian front-end developer junior. I am taking courses at Alura, Faculdade iv2 and other institutions in order to develop my skills. My main skills are HTML5, CSS3 and Javascript. I'm also a fluent English speaker."
  }  
  const [language, setLanguage] = useState(languages.eng)
  
  return (
  <HeroSection>
    <Languages>
      <LanguagesBtn onClick={()=> setLanguage(languages.eng)}>Eng</LanguagesBtn>
      <LanguagesBtn onClick={()=> setLanguage(languages.ptBr)}>PT-BR</LanguagesBtn>
    </Languages>
    
      <AboutWrap>
        <AboutPhoto>
          <img src={HeroImg} alt="" />
        </AboutPhoto>
        <AboutText>{language}</AboutText>
        <Social />
        <Arrow href="#projects">
          <svg id="more-arrows">
            <polygon
              class="arrow-top"
              points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
            />
            <polygon
              class="arrow-middle"
              points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
            />
            <polygon
              class="arrow-bottom"
              points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
            />
          </svg>
        </Arrow>
      </AboutWrap>

    
  </HeroSection>

  )
}

export default Hero;
