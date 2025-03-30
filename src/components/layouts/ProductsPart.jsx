import React from "react";
import Container from "../Container";
import Text from "../Text";
import Flex from "../Flex";
import Product from "../Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow";
import PrevArrow from "../PrevArrow";

const ProductsPart = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  

  return (
    <>
      <Container className={'py-20 relative'}>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
          </Slider>
        </div>
      </Container>

      <div className="pt-[65px] pb-[50px]">
        <Container>
          <div>
            <Text
              as={"h1"}
              className={"text-[40px] text-[#262626] font-bold pb-20"}
              text={"New Arrivals"}
            />
          </div>
          <div className="">
            <Flex className={"justify-between"}>
              <Product />
              <Product />
              <Product />
              <Product />
            </Flex>
            <div className="pt-[230px] pb-[65px]">
              <Flex className={"justify-between"}>
                <Product />
                <Product />
                <Product />
                <Product />
              </Flex>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductsPart;
