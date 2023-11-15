import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../app/components/Navbar/NavbarComponent";

import Svg1 from '../../public/svgs/Frame45.svg';
import Svg2 from '../../public/svgs/Frame47.svg';
import Svg3 from '../../public/svgs/Frame48.svg';
import Svg4 from '../../public/svgs/Frame49.svg';
import Svg5 from '../../public/svgs/Frame50.svg';
import Svg6 from '../../public/svgs/Frame51.svg';

const Flores = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
     autoplaySpeed:2000,
    };

  return (
    <>
      <Navbar />
      <h1 className="mb-4 text-center text-2xl text-purple-500 md:mb-6 lg:text-3xl">Flores</h1>
      <p class="mx-auto max-w-screen-md text-center text-white md:text-lg">
        Explore a beleza das flores e descubra informações interessantes sobre
        elas...
      </p>
      <Slider {...settings}>
      <div>
        <img src={Svg1}  />
      </div>
      <div>
        <img src={Svg2}  />
      </div>
      <div>
        <img src={Svg3}  />
      </div>
      <div>
        <img src={Svg4}  />
      </div>
      <div>
        <img src={Svg5}  />
      </div>
      <div>
        <img src={Svg6}  />
      </div>
    </Slider>


    </>
  );
};
export default Flores;
