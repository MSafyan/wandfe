// import "./App.css";
import { useState } from "react";
import './slider.css'
import Slider from "react-slick";
// import astronaut from "astronaut.png";
// import celebrating from "celebrating.png";
// import taken from "taken.png";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  Done,
  Facebook
} from '@material-ui/icons';

const images = ['./astronaut.png', './celebrating.png', './taken.png'];

function App() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <Done />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <Facebook />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;