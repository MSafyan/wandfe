import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button,Container,Grid } from '@material-ui/core';
import clsx from 'clsx';
import {BrowserView,MobileView} from 'react-device-detect';

import {
  Done,
  // Facebook
} from '@material-ui/icons';
// import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  mainContainer:{
    padding:theme.spacing(6)
  },
  headingBlue:{
    color:theme.palette.primary.main,
  },
  bold:{
    fontWeight:"bold",
    color:theme.palette.primary.dark,
    paddingBottom:theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(4),
    }
  },
  onlyBold:{
    fontWeight:"bold",
  },
  Button:{
    width:'22rem',
    height:'5rem',
    fontSize:'1.8rem',
    marginBottom:'3rem',
    color:'white',
  },
  line:{
    borderTop:'2px white solid',
    padding:theme.spacing(4),
    width:'5rem',
    marginRight:'auto'
  },
  cardWrapper:{
    alignItems:'end'
  },
  card:{
    background:theme.palette.primary.dark,
    color:'white',
    padding:theme.spacing(5),
    paddingBottom:theme.spacing(8),
    borderRadius:theme.spacing(2),
    textAlign:'left'
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
    color:"white"
  },
  darkBlue:{
    color:theme.palette.primary.dark,
  },
  popular:{
    color:'white'
  },
  large:{
    fontSize:theme.spacing(14),
    textAlign:'left'
  },
  flex:{
    display:'flex',
    flexDirection:'column',
  },
  mobileView:{
    display:'none',
    [theme.breakpoints.down('sm')]: {
      display:'inline-block',
      
    }
  },
  desktopView:{
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  }
}))

var cards = [
  {
    name:'Essentials',price:'$85',popular:true,
    features:[
      'All Basic features',
      'QuickBooks integration',
      'Visual price book',
      'Flat rate pricing',
      'Custom checklists',
      'Property profiles',
      'Premium review management',
      'Employee GPS tracking',
      'Employee time tracking',
      'In-app employee chat',
      'Custom local phone number',
      'Customizable text notifications'
    ]
  },
  {
    name:'Basic',price:'$65',
    features:[
      'All Basic features',
      'QuickBooks integration',
      'Visual price book',
      'Flat rate pricing',
      'Custom checklists'
    ]
  },
  {
    name:'Max',price:'$125',
    features:[
      'All Basic features',
      'QuickBooks integration',
      'Visual price book',
      'Flat rate pricing',
      'Custom checklists',
    ]
  },
] 


const Plans = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="xl">
      <Grid container spacing={3} className={classes.cardWrapper}>
      {/* <BrowserView> */}
        {
          cards.map((val,i)=>{
            return <Grid item xs={12} md={4}>
              {
                  i===0 && 
                  <div className={classes.mobileView}>
                    <Typography variant='h1' className={classes.bold}>
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
                {
                  i===1 && 
                  <div className={clsx(classes.desktopView,classes.flex)}>
                    <Typography variant='h1' className={clsx(classes.bold,classes.large)}>
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
                        <Done style={{marginRight:"1rem",fill:'white'}}/>
                        <Typography className={classes.featuresText} key={i} variant='h6'>
                          {val}
                        </Typography>
                      </div>
                    })}
                  </div>
                </div>
              </div>
            </Grid>
          })
        }
      {/* </BrowserView> */}
      </Grid>
      {/* <MobileView>
        <Carousel
          NextIcon='next'
          PrevIcon='prev'
          IndicatorIcon={<Facebook/>}
        >
          {
            items.map( (item, i) => <Typography variant='h6' key={i}> {item.name}</Typography> )
          }
        </Carousel>
      </MobileView> */}

    </Container>
  )
}

export default Plans