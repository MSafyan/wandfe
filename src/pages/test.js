import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <ArrowRightAltIcon />,
      prevArrow: <ArrowRightAltIcon />,
      appendDots: dots => (
        <div></div>
      )
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img width='200px'  src='home.png'/> 
          </div>
          <div>
          <img width='200px'  src='home.png'/> 
          </div>
          <div>
          <img width='200px'  src='home.png'/> 
          </div>
          <div>
          <img width='200px'  src='home.png'/> 
          </div>
        </Slider>
      </div>
    );
  }
}
export default MultipleItems;
