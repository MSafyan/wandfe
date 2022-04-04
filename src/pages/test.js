import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Wrapper: {
    display:'grid',
    gridTemplateAreas:
    `"cards buttons"`,
    gridTemplateColumns:'4fr 1fr',
  },
}))

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  // classes = useStyles();
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div style={{display:'grid',
      gridTemplateAreas:
      `"cards buttons"`,
      gridTemplateColumns:'4fr 1fr',}}>
        <div style={{width:'45vw'}}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div key={1}>
              <img src="home.png" width='200px'/> 
            </div>
            <div key={2}>
            <img src="home.png" width='200px'/> 
            </div>
            <div key={3}>
            <img src="home.png" width='200px'/> 
            </div>
            <div key={4}>
            <img src="home.png" width='200px'/> 
            </div>
          </Slider>
        </div>
        <div className="slider-arrow" style={{ textAlign: "center",gridArea:'buttons',position:'relative',top:'40%' }}>
          <Button className="arrow-btn prev"  onClick={this.previous}>
            <ArrowBackIcon/>
          </Button>
          <Button className="button" onClick={this.next}>
            <ArrowForwardIcon/>
          </Button>
        </div>
      </div>
    );
  }
}