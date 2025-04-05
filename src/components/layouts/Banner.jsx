import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const banner = "src/assets/banner.png";

const Banner = () => {
  let [active, setActive] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          right: "43.5%",
          top: "60%",
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        <ul style={{ margin: "0px", listStyle: "none", padding: 0 }}>
          {dots[active]}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          color: i === active ? "#262626" : "rgba(0, 0, 0, 0.3)",
          borderRight: i === active ? "4px #262626 solid" : "none",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "150px",
          textAlign: "center",
        }}
      >
        0{i + 1}
      </div>
    ),
  };

  return (
    <div className="w-full min-h-[500px] flex items-center relative">
      <Slider {...settings} className="w-full">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <img src={banner} alt="banner" className="object-cover w-full h-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
