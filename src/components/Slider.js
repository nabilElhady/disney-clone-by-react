import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import "../style/Home.css";
import sliderimg1 from "../images/slider-badag.jpg";
import sliderimg2 from "../images/slider-badging.jpg";
import sliderimg3 from "../images/slider-scale.jpg";
import sliderimg4 from "../images/slider-scales.jpg";
export const Slider2 = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="talk ">
      <Slider className="Slider" {...settings}>
        <div className="wrapper">
          <a className="wrap">
            <img className="img" src={sliderimg1}></img>
          </a>
        </div>
        <div className="wrapper">
          <a className="wrap">
            <img className="img" src={sliderimg2}></img>
          </a>
        </div>
        <div className="wrapper">
          <a className="wrap">
            <img className="img" src={sliderimg3}></img>
          </a>
        </div>
        <div className="wrapper">
          <a className="wrap">
            <img className="img" src={sliderimg4}></img>
          </a>
        </div>
      </Slider>
    </div>
  );
};
