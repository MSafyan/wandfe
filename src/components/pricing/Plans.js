import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Button,Container,Grid } from '@material-ui/core';
import clsx from 'clsx';
// import {BrowserView} from 'react-device-detect';
import { MobileView} from 'react-device-detect';

import {
  Done,
  Facebook
} from '@material-ui/icons';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  mainContainer:{
    padding:theme.spacing(6)
  },
  headingBlue:{
    color:theme.palette.primary.main,
  },
  bold:{
    fontWeight:"bold",
    paddingBottom:theme.spacing(8)
  },
  Button:{
    fontSize:'1.2rem',
    width:'15rem',
    marginBottom:'1rem',
    color:"white"
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
    padding:theme.spacing(3),
    borderRadius:theme.spacing(2),
    textAlign:'left'
  },
  lightBg:{
    background:theme.palette.primary.main
  },
  namePrice:{
    display:'flex',
    justifyContent:'space-between',
    paddingTop:theme.spacing(2),
    paddingBottom:theme.spacing(4),
  },
  features:{
    textAlign:'left'
  },
  featureWrapper:{
    display:'flex'
  },
  featuresText:{
    paddingBottom:theme.spacing(1),
    fontWeight:'bold'
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

var items = [
  {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
  },
  {
      name: "Random Name #2",
      description: "Hello World!"
  },
  {
      name: "Random Name #3",
      description: "Hello World!"
  }
]


const Plans = () => {
  const classes = useStyles();

  return (
    <Container className={classes.mainContainer} component="main" maxWidth="lg">
      <Grid container spacing={3} className={classes.cardWrapper}>
      {/* <BrowserView> */}
        {
          cards.map((val,i)=>{
            return <Grid item xs={12} md={4}>
              {
                i===1 && 
                <>
                  <Typography variant='h2' className={classes.bold}>
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
                </>
              }
              <div className={clsx(classes.card,i===1 && classes.lightBg)}>
                {
                  val.popular &&  
                  <Typography variant='body2'>
                    Most popular
                  </Typography>
                }
                <div>
                  <div className={classes.namePrice}>
                    <Typography variant='h4'>
                      {val.name}
                    </Typography>
                    <Typography variant='h4'>
                      {val.price}
                    </Typography>
                  </div>
                  <div className={classes.line}>
                  
                  </div>
                  <div className={classes.features}>
                  {val.features.map((val,i)=>{
                      return <div className={classes.featureWrapper}>
                        <Done style={{marginRight:"1rem"}}/>
                        <Typography className={classes.featuresText} key={i} variant='body2'>
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
      <MobileView>
        <Carousel
          NextIcon='next'
          PrevIcon='prev'
          IndicatorIcon={<Facebook/>}
        >
          {
            items.map( (item, i) => <Typography variant='h6' key={i}> {item.name}</Typography> )
          }
        </Carousel>
      </MobileView>

    </Container>
  )
}

export default Plans