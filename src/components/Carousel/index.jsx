import { useEffect } from "react";
import useAxiosHook from "axios-hook-library";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselItem } from "./styles";

const Carousel = () => {
  const { rspData, fetchData } = useAxiosHook();

  useEffect(() => {
    const url = "https://api.github.com/users/helenaamartins/repos";
    fetchData(url, "GET");
    // eslint-disable-next-line
  }, []);
  
  const excludeIds = [357646759, 357243422, 392445421, 400655623, 383202924, 373942598, 341371443, 370479085]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Slider {...settings}>
      {rspData.data &&
        rspData.data.map((project) => {
          if(excludeIds.includes(project.id)){
              return ''
          }
          return (
            <CarouselItem key={project.id} id={project.id}>
              <figure>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={`${project.html_url}/blob/main/preview.png?raw=true`} alt="" />
                </a>
              </figure>
              <a
                href={project.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <h3>{project.description}</h3>
              </a>
            </CarouselItem>
          );
        })}
    </Slider>
  );
};

export default Carousel;
