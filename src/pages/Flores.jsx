import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../app/components/Navbar/NavbarComponent";

const Flores = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  const svgStyles = {
    large: {
      width: '150px',
      height: '150px',
      fill: 'red',
    },


  };

  return (
    <>
      <Navbar />
      <h1 className="mb-4 text-center text-2xl text-purple-500 md:mb-6 lg:text-3xl">Flores</h1>
      <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
        Explore a beleza das flores e descubra informações interessantes sobre elas...
      </p>
      <Slider {...settings}>
        <div>
          <img src="/svgs/florborda.svg" alt="Flor 1" style={svgStyles.large} />
        </div>
        <div>
          <img src="/svgs/florborda.svg" alt="Flor 2" style={svgStyles.large} />
        </div>
        <div>
          <img src="/svgs/florborda.svg" alt="Flor 3" style={svgStyles.large} />
        </div>
      </Slider>
    </>
  );
};

export default Flores;