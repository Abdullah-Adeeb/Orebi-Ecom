import React from "react";
import Container from '../Container'
import Text from '../Text'
import Flex from '../Flex'
import Product from '../Product'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Offer = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true
  };
  return (
    <div className="pt-[65px] pb-[110px]">
      <Container>
        <div>
          <Text
            as={"h1"}
            className={"text-[40px] text-[#262626] font-bold pb-20"}
            text={"Special Offers"}
          />
        </div>
        <Container className={''}>
        <div className="slider-container">
      <Slider className={'pb-14'} {...settings}>
        <div>
          <Product/>
        </div>
        <div>
          <Product/>
        </div>
        <div>
          <Product/>
        </div>
        <div>
          <Product/>
        </div>
        <div>
          <Product/>
        </div>
        <div>
          <Product/>
        </div>
      </Slider>
    </div>
        </Container>
      </Container>
    </div>
  );
};

export default Offer;
