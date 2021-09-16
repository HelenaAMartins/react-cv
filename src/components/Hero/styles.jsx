import styled from "styled-components";
import { colors } from "../../styles/variables";
import { Section } from '../../styles/shared'


import BgDev from '../../assets/img/bg_dev.jpg'

export const HeroSection = styled(Section)`
background-image: url(${BgDev});
background-size: cover;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
color: ${colors.icons};
position: relative;
`
export const Languages = styled.div`
position: absolute;
top: 20px;
right: 20px;
z-index: 4;
`
export const LanguagesBtn = styled.button`
background: none;
color: ${colors.white};
border: 0;
opacity: 0.5;
padding-left: 10px;
cursor: pointer;
transition: all 0.5s;

:hover{
  opacity: 1;
}
`

export const AboutWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 600px;
text-align: center;
z-index: 2;
margin-bottom: 120px;
`
export const AboutPhoto = styled.div`

width: 300px;
height: 300px;
overflow: hidden;
border-radius: 50%;
object-fit: contain;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const AboutText = styled.p`
font-size: 20px;
padding:15px;
`
export const Arrow = styled.a`
position: absolute;
left: 50%;
top: 90%;
transform: translate(-50%, -50%);
z-index: 2;
#more-arrows {
  width: 75px;
  height: 65px;
}
#more-arrows:hover polygon {
  fill: #fff;
  transition: all 0.2s ease-out;
}
#more-arrows:hover polygon.arrow-bottom {
  transform: translateY(-18px);
}
#more-arrows:hover polygon.arrow-top {
  transform: translateY(18px);
}
polygon {
  fill: #fff;
  transition: all 0.2s ease-out;
}
polygon.arrow-middle {
  opacity: 0.75;
}
polygon.arrow-top {
  opacity: 0.5;
}
`
