import { Section, Container } from '../../styles/shared';
import { SliderTitle, PortfolioItems } from './styles';
import Carousel from '../Carousel';

const Portfolio = () => {
  return(
    <Section id="projects">
      <Container>
        <SliderTitle>Featured Projects</SliderTitle>
        <PortfolioItems>

        <Carousel />
        </PortfolioItems>
      </Container>
    </Section>

  )
}

export default Portfolio;
