import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/styles';
import { Button, Typography } from "@material-ui/core";
import clsx from "clsx";

const styles = (theme) => ({
  Wrapper: {
    display:'grid',
    gridTemplateAreas:
    `"cards buttons"`,
    gridTemplateColumns:'4fr 1fr',
  },
  imgWrapper:{
    backgroundImage:
    `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0,80,81, 1)),
    url('home1.jpg')`,
    width: '12vw !important',
    height: '14vw',
    backgroundSize: 'cover',
    color: 'white',
    padding: '20px',
    borderRadius:'1rem',
    marginRight:'2rem',
    position:'relative',
    [theme.breakpoints.down('sm')]:{
      width:"160px !important",
      height:'200px',
      padding: '10px',
      marginTop:'10px'
    }
  },
  address:{
    position:"absolute",
    bottom:'1rem',
    fontWeight:"400",
    fontSize:'11px',
    padding:'0.4rem',
    [theme.breakpoints.up('md')]: {
      fontSize:'0.75vw',
      padding:'0.4vw',
    }
  },
  home:{
    padding:"6px 9px",
    color:theme.palette.primary.main,
    background:'white',
    borderRadius:'1rem',
    display:"block",
    width:"min-content",
    fontSize:'9px',
    [theme.breakpoints.up('md')]: {
      fontSize:'0.75vw',
      padding:'0.4vw',
      marginBottom:'0.7vw'
    }
  },
  arrows:{
    textAlign: "center",gridArea:'buttons',position:'relative',top:'40%',
    [theme.breakpoints.down('md')]:{
      right:"6vw",
    },
    [theme.breakpoints.down('sm')]:{
      width:'150px',
    }
  }
})

class PreviousNextMethods extends Component {
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
      responsive: [
        {breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
        {breakpoint: 1278,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
    };
    const cards =[
      {
        img:"home1.jpg",
        address:'911 Washington Ave, St. Louise, MO 61101, USA'
      },
      {
        img:"home1.jpg",
        address:'911 Washington Ave, St. Louise, MO 61101, USA'
      },
      {
        img:"home1.jpg",
        address:'911 Washington Ave, St. Louise, MO 61101, USA'
      },
      {
        img:"home1.jpg",
        address:'911 Washington Ave, St. Louise, MO 61101, USA'
      },
    ]

    const { classes } = this.props;
    return (
      <div style={{display:'grid',
      gridTemplateAreas:
      `"cards buttons"`,
      gridTemplateColumns:'4fr 1fr',}}>
        <div style={{width:'45vw'}}>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {
              cards.map((val,i)=>{
                return <div className={classes.imgWrapper}>
                  <Typography variant='body1' className={classes.address}>
                    <span className={classes.home}>House</span>
                    {val.address}
                  </Typography>
                </div>
              })
            }
          </Slider>
        </div>
        <div className={clsx("slider-arrow",classes.arrows)}>
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


export default withStyles(styles)(PreviousNextMethods);