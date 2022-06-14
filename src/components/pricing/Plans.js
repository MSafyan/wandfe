import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button,Container,Grid } from '@material-ui/core';
import clsx from 'clsx';

import {
  Done,
  // Facebook
} from '@material-ui/icons';
import PricingSlider from './PricingSlider';
// import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  mainContainer:{
    padding:'3vw',
    [theme.breakpoints.down('sm')]: {
      padding:'10vw 2vw',
    }
  },
  headingBlue:{
    color:theme.palette.primary.main,
  },
  bold:{
    fontWeight:"bold",
    color:theme.palette.primary.dark,
    paddingBottom:theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(3),
      fontSize:"1rem"
    }
  },
  onlyBold:{
    fontWeight:"bold",
    fontSize:"2.6vw"
  },
  Button:{
    width:'18vw',
    height:'4vw',
    fontSize:'1.6vw',
    marginBottom:'2.5vw',
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
    margin:'5vw 0px',
    width:'6vw',
    marginRight:'auto'
  },
  cardWrapper:{
    alignItems:'end'
  },
  card:{
    background:theme.palette.primary.dark,
    color:'white',
    padding:'2vw',
    paddingBottom:'3.5vw',
    borderRadius:'1vw',
    textAlign:'left'
  },
  lightBg:{
    background:theme.palette.primary.main
  },
  namePrice:{
    display:'flex',
    justifyContent:'space-between',
    fontWeight:'bold',
    paddingTop:'1vw',
  },
  features:{
    textAlign:'left',
  },
  featureWrapper:{
    display:'flex',
    paddingBottom:'0.5vw',
  },
  featuresText:{
    paddingBottom:'0.6vw',
    fontWeight:'bold',
    color:"white",
    fontSize:'1.3vw'
  },
  darkBlue:{
    color:theme.palette.primary.dark,
  },
  popular:{
    fontSize:'1.2vw',
    color:'white'
  },
  large:{
    fontSize:'6vw',
    textAlign:'left'
  },
  flex:{
    display:'flex',
    flexDirection:'column',
  },
  mobileView:{
    display:'none',
    [theme.breakpoints.down('sm')]: {
      display:'block',
      
    }
  },
  desktopView:{
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  }
}))

var obj1=  {
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
}
var obj2={
  name:'Basic',price:'$65',
  features:[
    'All Basic features',
    'QuickBooks integration',
    'Visual price book',
    'Flat rate pricing',
    'Custom checklists'
  ]
}
var obj3={
  name:'Max',price:'$125',
  features:[
    'All Basic features',
    'QuickBooks integration',
    'Visual price book',
    'Flat rate pricing',
    'Custom checklists',
  ]
}

var cards = [obj1,obj2,obj3];
var mobile=[obj2,obj1,obj3];


const Plans = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="xl">
      <Grid container spacing={3} className={clsx(classes.cardWrapper,classes.desktopView)}>
        {
          cards.map((val,i)=>{
            return <Grid item xs={12} md={4}>
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
      </Grid>
      <div className={classes.mobileView}>
        <PricingSlider cards={mobile}/>
      </div>

    </Container>
  )
}

export default Plans

// {
//   i===0 && 
//   <div className={classes.mobileView}>
//     <Typography variant='h1' className={classes.bold}>
//       Start Now Your 
//       <span className={classes.headingBlue}>
//         {" Plan"}
//       </span>
//     </Typography>
//     <Button
//       className={classes.Button}
//       variant="contained"
//       color="primary"
//     >
//       LEARN MORE
//     </Button>
//   </div>
// }