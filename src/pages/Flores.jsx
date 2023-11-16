import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../app/components/Navbar/NavbarComponent";

const Flores = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000
  };

 

  const svgStyles = {
    flor1: {
      width: "260px",
      height: "260px",
      fill: "red",
    },
    flor2: {
      width: "260px",
      height: "260px",
      fill: "blue",
    },
    flor3: {
      width: "260px",
      height: "260px",
      fill: "red",
    },
    flor4: {
      width: "260px",
      height: "260px",
      fill: "red",
    },
  };

  return (
    <>
      <Navbar />
      <h1 className="mb-4 text-center text-2xl text-purple-500 md:mb-6 lg:text-3xl">
        Flores
      </h1>
      <p className="mx-auto max-w-screen-md text-center text-white md:text-lg">
        Explore a beleza das flores e descubra informações interessantes sobre
        elas...
      </p>
      <Slider {...settings} className="justfy-center m-8">
        <div>
          <img src="/svgs/florborda.svg" alt="Flor 1" style={svgStyles.flor1} />
        </div>
        <div>
          <img src="/svgs/florborda.svg" alt="Flor 2" style={svgStyles.flor2} />
        </div>
        <div>
          <img src="/svgs/florborda.svg" alt="Flor 3" style={svgStyles.flor3} />
        </div>
        <div>
          <img src="/svgs/florborda.svg" alt="Flor 3" style={svgStyles.flor4} />
        </div>
      </Slider>
    </>
  );
};

export default Flores;
