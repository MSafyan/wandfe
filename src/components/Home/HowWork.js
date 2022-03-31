import React from 'react'
import clsx from 'clsx';
// import Slider from "react-slick";
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container} from '@material-ui/core';
import {
  Payment,
  Beenhere,
  ThumbUpAlt,
  Build
} from '@material-ui/icons';
// import { MobileView} from 'react-device-detect';
// import Carousel from 'react-material-ui-carousel';
// import Carousel from "react-simply-carousel";
// import {
//   Done,
//   Facebook
// } from '@material-ui/icons';

import CardOutlined from './CardOutlined'

  const useStyles = makeStyles((theme) => ({
    mainContainer:{
      paddingTop:theme.spacing(1),
      paddingBottom:theme.spacing(8),
      textAlign:'left',
      [theme.breakpoints.down('xs')]: {
        paddingTop:theme.spacing(2)
      }
    },
    bold:{
      fontWeight:"bold",
      paddingBottom:theme.spacing(1)
    },
    heading2:{
      paddingBottom:theme.spacing(6)
    },
    headingBlue:{
      color:theme.palette.primary.main,
      display:'block'
    },
    cardRoot:{
      minWidth: 275,
    }
  }));

const Payments = () => {
  const classes = useStyles();
  // const [activeSlide, setActiveSlide] = useState(0);

  const cards=[
    {
      heading:"Easily find new Cleaning Job",
      body:'Easily view all of your local cleaners ready for for a one time job, or recurring visits.',
      icon:<Payment style={{fill:'white'}}/>
    },
    {
      heading:"notify & dispatch cleaning crews in real time",
      body:'Securely book & pay right inside of the app',
      icon:<Beenhere style={{fill:'white'}}/>
    },
    {
      heading:"Manage time, location, and other job details",
      body:'In app reviews let you know exactly who you are working with',
      icon:<ThumbUpAlt style={{fill:'white'}}/>
    },
    {
      heading:"Look up job & customer history on any device",
      body:'Anytime you need anything, give our 24/7 customer support a call',
      icon:<Build style={{fill:'white'}}/>
    }
  ]
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="xl">
      <Typography variant='h5' className={classes.bold}>
        HOW WE WORK
      </Typography>
      <Typography variant='h1' className={clsx(classes.bold,classes.heading2)}>
      Find Work Easily By 
      <span className={classes.headingBlue}>
        {" Wand"}
      </span>
      </Typography>
      <Grid container spacing={4}>
      {/* <MobileView>
      <Slider {...settings}> */}
        {
          cards.map((val,i)=>{
            return <Grid item md={4}><CardOutlined key={i} val={val}/></Grid>
          })
        }
        {/* </Slider>
      </MobileView> */}

      </Grid>
    </Container>
  )
}

export default Payments