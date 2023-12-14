import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navbar />

      <Slider {...settings} className="justfy-center m-8">
        <div>
          <Image
            src="/svgs/florborda.svg"
            alt="Flor 1"
            width={260}
            height={260}
          />
        </div>
        <div>
          <Image
            src="/svgs/florborda.svg"
            alt="Flor 2"
            width={260}
            height={260}
          />
        </div>
        <div>
          <Image
            src="/svgs/florborda.svg"
            alt="Flor 3"
            width={260}
            height={260}
          />
        </div>
        <div>
          <Image
            src="/svgs/florborda.svg"
            alt="Flor 4"
            width={260}
            height={260}
          />
        </div>
      </Slider>
    </>
  );
};

export default Flores;
