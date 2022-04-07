import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from "@material-ui/core";
// import CardOutlined from './CardOutlined'
import { Typography,Grid,Container} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import './slider.css'
import clsx from 'clsx';
import {
  Done,
  // Facebook
} from '@material-ui/icons';

const styles = theme => ({
  cardWrapper: {
    paddingTop:'3rem',
    [theme.breakpoints.down('xs')]: {
      width:'40vw',
      alignItems:'end',
      padding:'0.3rem',
    }
  },
  bold:{
    fontWeight:"bold",
    color:theme.palette.primary.dark,
    paddingBottom:theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(1),
      fontSize:"1rem",
    }
  },
  onlyBold:{
    fontWeight:"bold",
    [theme.breakpoints.down('sm')]: {
      fontSize:'1.2rem'
    }
  },
  Button:{
    width:'22rem',
    height:'5rem',
    fontSize:'1.8rem',
    marginBottom:'3rem',
    color:'white',
    [theme.breakpoints.down('sm')]: {
      width:"7rem",
      height:'1.7rem',
      fontSize:'0.6rem',
      marginBottom:'2rem',
    }
  },
  line:{
    borderTop:'2px white solid',
    padding:theme.spacing(4),
    width:'5rem',
    marginRight:'auto',
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(2),
    }
  },
  card:{
    background:theme.palette.primary.dark,
    color:'white',
    padding:theme.spacing(5),
    paddingBottom:theme.spacing(8),
    borderRadius:theme.spacing(2),
    textAlign:'left',
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(2),
      paddingBottom:theme.spacing(3),
    }
  },
  icon:{
    marginRight:"1rem",
    fill:'white',
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.6rem"
    }
  },
  lightBg:{
    background:theme.palette.primary.main
  },
  namePrice:{
    display:'flex',
    justifyContent:'space-between',
    fontWeight:'bold',
    paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      paddingTop:theme.spacing(1),
      paddingBottom:theme.spacing(2),
    }
  },
  features:{
    textAlign:'left',
  },
  featureWrapper:{
    display:'flex',
    paddingBottom:theme.spacing(1),
  },
  featuresText:{
    paddingBottom:theme.spacing(1),
    fontWeight:'bold',
    color:"white",
    [theme.breakpoints.down('sm')]: {
      fontSize:"0.5rem",
      paddingBottom:theme.spacing(0),
    }
  },
  darkBlue:{
    color:theme.palette.primary.dark,
  },
  popular:{
    color:'white',
    [theme.breakpoints.down('sm')]: {
      fontSize:'0.4rem'
    }
  },
  large:{
    fontSize:theme.spacing(14),
    textAlign:'left'
  },
  flex:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:"center"
  },
});

class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state ={imageIndex:0};
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      infinite: true,
      lazyLoad: true,
      speed: 300,
      slidesToShow: 2,
      // centerMode: true,
      centerPadding: 0,
      beforeChange: (current, next) => this.setState({imageIndex:next}),
    };

    const { classes } = this.props;

    return (
      <div style={{display:'grid',
        gridTemplateAreas:`"cards buttons"`,
        gridTemplateColumns:'4fr 1fr'}}>
        <div style={{width:'90vw'}}>
          {/* <Grid container spacing={10}> */}
            <Slider ref={c => (this.slider = c)} {...settings}>
              {this.props.cards.map((val,i)=>{
                return <div className={clsx(classes.cardWrapper,i === this.state.imageIndex ? "slide activeSlide" : "slide")}>
                {
                  i===1 && 
                  <div className={clsx(classes.desktopView,classes.flex)}>
                    <Typography variant='h1' className={clsx(classes.bold)}>
                      Start Now Your 
                      <span className={classes.headingBlue}>
                        {" Plan"}
                      </span>
                    </Typography>
                    <Button
                      className={classes.Button}
                      variant="contained"
                      color="primary"
                    >
                      LEARN MORE
                    </Button>
                  </div>
                }
                    <div className={clsx(classes.card,i===1 && classes.lightBg)}>
                      {
                        val.popular &&  
                        <Typography variant='h6' className={classes.popular}>
                          Most popular
                        </Typography>
                      }
                      <div>
                        <div className={classes.namePrice}>
                          <Typography variant='h4' className={classes.onlyBold}>
                            {val.name}
                          </Typography>
                          <Typography variant='h4'  className={classes.onlyBold}>
                            {val.price}
                          </Typography>
                        </div>
                        <div className={classes.line}>
                        
                        </div>
                        <div className={classes.features}>
                        {val.features.map((val,i)=>{
                            return <div className={classes.featureWrapper}>
                              <Done className={classes.icon}/>
                              <Typography className={classes.featuresText} key={i} variant='h6'>
                                {val}
                              </Typography>
                            </div>
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
              })}
            </Slider>
          {/* </Grid> */}
        </div>
        <div  style={{ textAlign: "center",gridArea:'buttons',position:'relative',top:'-10%',right:'100%' }}>
          <div style={{display:'flex'}}>
            <Button className="arrow-btn prev"  onClick={this.previous}>
              <ArrowBackIcon/>
            </Button>
            <Button className="button" onClick={this.next}>
              <ArrowForwardIcon/>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PreviousNextMethods);